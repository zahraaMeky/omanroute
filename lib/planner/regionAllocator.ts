import { Destination } from "@/data"
import { TripInputs, RegionAllocation } from "./types"
import { scoreDestination } from "./scorer"

export function allocateRegions(
  destinations: Destination[],
  inputs: TripInputs
): RegionAllocation[] {
  const maxCost = Math.max(...destinations.map(d => d.ticket_cost_omr))
  // calculates average score for each region

  const regionScores: Record<string, number> = {}
  const regionCounts: Record<string, number> = {}

  for (const dest of destinations) {
    const region = dest.region.en
    const score = scoreDestination(dest, inputs, [], maxCost)
    regionScores[region] = (regionScores[region] ?? 0) + score
    regionCounts[region] = (regionCounts[region] ?? 0) + 1
  }
   // sorts regions from best to worst match for the user
  const regionAvg = Object.entries(regionScores).map(([region, total]) => ({
    region,
    score: total / regionCounts[region],
  }))

  regionAvg.sort((a, b) => b.score - a.score)

  // ensures no region gets more than half the total days.
  const maxDaysPerRegion = Math.ceil(inputs.days / 2)

  // at least 2 regions must be visited if trip is 3+ days
  const minRegions = inputs.days >= 3 ? 2 : 1

  //assigns days to regions starting from the best scored
  const allocations: RegionAllocation[] = []
  let remainingDays = inputs.days

  for (const { region } of regionAvg) {
    if (remainingDays === 0) break

    const daysForRegion = Math.min(maxDaysPerRegion, remainingDays)
    allocations.push({ region, days: daysForRegion, startDay: 0 })
    remainingDays -= daysForRegion

    if (allocations.length >= minRegions && remainingDays === 0) break
  }

  let currentDay = 1
  for (const alloc of allocations) {
    alloc.startDay = currentDay
    currentDay += alloc.days
  }

  return allocations
}
