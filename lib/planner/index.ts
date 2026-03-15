import { Destination } from "@/data"
import { TripInputs, TripPlan } from "./types"
import { allocateRegions } from "./regionAllocator"
import { buildSchedule } from "./scheduler"
import { estimateCost } from "./costEstimator"

export function generateTripPlan(
  destinations: Destination[],
  inputs: TripInputs
): TripPlan {
  const regionAllocation = allocateRegions(destinations, inputs)
  const days = buildSchedule(regionAllocation, destinations, inputs)
  const totalKm = days.reduce((sum, d) => sum + d.totalKm, 0)
  const cost = estimateCost(days, inputs)

  return {
    regionAllocation,
    days,
    totalKm,
    cost,
  }
}
