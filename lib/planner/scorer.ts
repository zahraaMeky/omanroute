import { Destination } from "@/data"
import { TripInputs } from "./types"
import { detourKm } from "./distance"

// how important each factor is in the final score
const WEIGHTS = {
  interest:  0.30,
  season:    0.25,
  crowd:     0.20,
  cost:      0.15,
  detour:    0.05,
  diversity: 0.05,
}
// checks if destination categories match user preferences
function jaccardSimilarity(userCats: string[], destCats: string[]): number {
  if (userCats.length === 0) return 0.5
  const intersection = destCats.filter(c => userCats.includes(c)).length
  const union = new Set([...userCats, ...destCats]).size
  return intersection / union
}
    // is this month good for this destination
function seasonFit(month: number, recommendedMonths: number[]): number {
  return recommendedMonths.includes(month) ? 1 : 0
}

// converts numbers to 0-1 scale for fair comparison
function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0
  return (value - min) / (max - min)
}

    // rewards destinations that add new categories
function diversityGain(dest: Destination, selected: Destination[]): number {
  const existingCats = new Set(selected.flatMap(d => d.categories))
  const newCats = dest.categories.filter(c => !existingCats.has(c))
  return newCats.length > 0 ? 1 : 0
}

// combines all factors into one final score
export function scoreDestination(
  dest: Destination,
  inputs: TripInputs,
  currentRoute: Destination[],
  maxCost: number
): number {
  const interest  = jaccardSimilarity(inputs.categories, dest.categories)
  const season    = seasonFit(inputs.month, dest.recommended_months)
  const crowd     = normalize(dest.crowd_level, 1, 5)
  const cost      = normalize(dest.ticket_cost_omr, 0, maxCost)
  const detour    = normalize(detourKm(currentRoute, dest), 0, 250)
  const diversity = diversityGain(dest, currentRoute)

  return (
    WEIGHTS.interest  * interest +
    WEIGHTS.season    * season -
    WEIGHTS.crowd     * crowd -
    WEIGHTS.cost      * cost -
    WEIGHTS.detour    * detour +
    WEIGHTS.diversity * diversity
  )
}

// sorts all destinations from best to worst score
export function scoreAndSort(
  destinations: Destination[],
  inputs: TripInputs,
  currentRoute: Destination[]
): Destination[] {
  const maxCost = Math.max(...destinations.map(d => d.ticket_cost_omr))
  return [...destinations]
    .map(d => ({ dest: d, score: scoreDestination(d, inputs, currentRoute, maxCost) }))
    .sort((a, b) => b.score - a.score)
    .map(d => d.dest)
}
