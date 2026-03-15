import { Destination } from "@/data"
import { TripInputs, DayPlan, DayStop, RegionAllocation } from "./types"
import { scoreAndSort, jaccardSimilarity, normalize } from "./scorer"
import { distanceKm, totalKm } from "./distance"
import { twoOpt } from "./optimizer"

const MAX_DAILY_HOURS = 8
const MAX_DAILY_KM = 250
const MAX_STOPS: Record<string, number> = {
  relaxed: 3,
  balanced: 4,
  packed: 5,
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`
}

function buildDayPlan(
  dayNumber: number,
  region: string,
  regionDestinations: Destination[],
  inputs: TripInputs,
  usedIds: Set<string>
): DayPlan {
  const maxStops = MAX_STOPS[inputs.intensity]
  const available = regionDestinations.filter(d => !usedIds.has(d.id))
  const sorted = scoreAndSort(available, inputs, [])
  const maxCost = Math.max(...regionDestinations.map(d => d.ticket_cost_omr), 1)

  const selectedStops: Destination[] = []
  let totalMinutes = 0
  let totalDistance = 0

  for (const dest of sorted) {
    if (selectedStops.length >= maxStops) break
    if (totalMinutes + dest.avg_visit_duration_minutes > MAX_DAILY_HOURS * 60) break

    const dist = selectedStops.length > 0
      ? distanceKm(selectedStops[selectedStops.length - 1], dest)
      : 0

    if (totalDistance + dist > MAX_DAILY_KM) break

    const prevIsLong = selectedStops.length > 0 &&
      selectedStops[selectedStops.length - 1].avg_visit_duration_minutes > 90
    const thisIsLong = dest.avg_visit_duration_minutes > 90

    if (prevIsLong && thisIsLong) continue

    selectedStops.push(dest)
    totalMinutes += dest.avg_visit_duration_minutes
    totalDistance += dist
    usedIds.add(dest.id)
  }

  const optimized = twoOpt(selectedStops)

  let currentMinutes = 9 * 60
  const stops: DayStop[] = optimized.map((dest, i) => {
    const distFromPrev = i === 0 ? 0 : distanceKm(optimized[i - 1], dest)
    const travelMinutes = Math.round((distFromPrev / 60) * 60)
    currentMinutes += travelMinutes
    const arrival = formatTime(currentMinutes)
    currentMinutes += dest.avg_visit_duration_minutes
    const departure = formatTime(currentMinutes)

    return {
      destination: dest,
      arrivalTime: arrival,
      departureTime: departure,
      distanceFromPrev: Math.round(distFromPrev),
      scoreComponents: {
        interest: parseFloat(jaccardSimilarity(inputs.categories, dest.categories).toFixed(2)),
        season: dest.recommended_months.includes(inputs.month) ? 1 : 0,
        crowd: parseFloat(normalize(dest.crowd_level, 1, 5).toFixed(2)),
        cost: parseFloat(normalize(dest.ticket_cost_omr, 0, maxCost).toFixed(2)),
      },
    }
  })

  return {
    day: dayNumber,
    region,
    stops,
    totalKm: Math.round(totalKm(optimized)),
    totalHours: Math.round(totalMinutes / 60),
  }
}

export function buildSchedule(
  allocations: RegionAllocation[],
  destinations: Destination[],
  inputs: TripInputs
): DayPlan[] {
  const usedIds = new Set<string>()
  const dayPlans: DayPlan[] = []

  for (const alloc of allocations) {
    const regionDests = destinations.filter(d => d.region.en === alloc.region)
    for (let i = 0; i < alloc.days; i++) {
      const dayNumber = alloc.startDay + i
      const plan = buildDayPlan(dayNumber, alloc.region, regionDests, inputs, usedIds)
      dayPlans.push(plan)
    }
  }

  return dayPlans
}