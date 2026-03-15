import { TripInputs, DayPlan, CostBreakdown } from "./types"

// hotel cost per night based on budget tier as specified in challenge requirements
const HOTEL_COST: Record<string, number> = {
  low: 20,
  medium: 45,
  luxury: 90,
}

// current Oman fuel price per liter (2026)
const FUEL_PRICE = 0.24

// food cost per day as specified in challenge requirements
const FOOD_PER_DAY = 6

export function estimateCost(
  days: DayPlan[],
  inputs: TripInputs
): CostBreakdown {
  const totalKm = days.reduce((sum, d) => sum + d.totalKm, 0)
  const fuel = parseFloat(((totalKm / 12) * FUEL_PRICE).toFixed(2))
  const tickets = parseFloat(
    days
      .flatMap(d => d.stops)
      .reduce((sum, s) => sum + s.destination.ticket_cost_omr, 0)
      .toFixed(2)
  )
  const food = FOOD_PER_DAY * inputs.days
  const hotel = HOTEL_COST[inputs.budget] * (inputs.days - 1)
  const total = parseFloat((fuel + tickets + food + hotel).toFixed(2))

  return { fuel, tickets, food, hotel, total }
}