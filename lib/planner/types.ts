import { Destination, destinations } from "@/data";
//  the type of data which user enter in the form 
export interface TripInputs {
  days: number
  budget: "low" | "medium" | "luxury"
  month: number
  intensity: "relaxed" | "balanced" | "packed"
  categories: string[]
}
// the 4 scores calculated for each destination.
export interface ScoreComponents {
  interest: number
  season: number
  crowd: number
  cost: number
}
//  one destination info of the day
export interface DayStop {
  destination: Destination
  arrivalTime: string
  departureTime: string
  distanceFromPrev: number
  scoreComponents: ScoreComponents
}
//  full day trip
export interface DayPlan {
  day: number
  region: string
  stops: DayStop[]
  totalKm: number
  totalHours: number
}
// which region gets which days. For example Muscat gets days 1-2
export interface RegionAllocation {
  region: string
  days: number
  startDay: number
}
    // the full cost
export interface CostBreakdown {
  fuel: number
  tickets: number
  food: number
  hotel: number
  total: number
}
// the the final complete trip contain region days cost and km
export interface TripPlan {
  regionAllocation: RegionAllocation[]
  days: DayPlan[]
  totalKm: number
  cost: CostBreakdown
}
