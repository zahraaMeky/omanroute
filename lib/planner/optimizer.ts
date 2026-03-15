import { Destination } from "@/data"
import { totalKm } from "./distance"

export function twoOpt(stops: Destination[]): Destination[] {
  if (stops.length < 4) return stops

  let best = [...stops]
  let improved = true

  while (improved) {
    improved = false
    for (let i = 1; i < best.length - 1; i++) {
      for (let j = i + 1; j < best.length; j++) {
        const newRoute = [
          ...best.slice(0, i),
          ...best.slice(i, j + 1).reverse(),
          ...best.slice(j + 1),
        ]
        if (totalKm(newRoute) < totalKm(best)) {
          best = newRoute
          improved = true
        }
      }
    }
  }

  return best
}
