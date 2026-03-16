import { Destination } from "@/data"
import { TripInputs, TripPlan } from "./types"
import { allocateRegions } from "./regionAllocator"
import { buildSchedule } from "./scheduler"
import { estimateCost } from "./costEstimator"

// budget thresholds per tier as documented
const BUDGET_THRESHOLDS: Record<string, number> = {
  low: 100,
  medium: 250,
  luxury: 500,
}

export function generateTripPlan(
  destinations: Destination[],
  inputs: TripInputs
): TripPlan {
  const regionAllocation = allocateRegions(destinations, inputs)
  const days = buildSchedule(regionAllocation, destinations, inputs)
  const totalKm = days.reduce((sum, d) => sum + d.totalKm, 0)
  const cost = estimateCost(days, inputs)

  const threshold = BUDGET_THRESHOLDS[inputs.budget]

  if (cost.total > threshold) {
    // filter out paid destinations and keep free ones
    const budgetFriendly = destinations.filter(d => d.ticket_cost_omr === 0)

    // keep category coverage as high as possible
    const userCats = new Set(inputs.categories)
    const hasCoverage = inputs.categories.every(cat =>
      budgetFriendly.some(d => d.categories.includes(cat as any))
    )

    // only use budget friendly if we can still cover user categories
    const filteredDestinations = hasCoverage ? budgetFriendly : destinations

    const newDays = buildSchedule(regionAllocation, filteredDestinations, inputs)
    const newTotalKm = newDays.reduce((sum, d) => sum + d.totalKm, 0)
    const newCost = estimateCost(newDays, inputs)

    return {
      regionAllocation,
      days: newDays,
      totalKm: newTotalKm,
      cost: newCost,
    }
  }

  return {
    regionAllocation,
    days,
    totalKm,
    cost,
  }
}