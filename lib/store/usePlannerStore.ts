import { create } from "zustand"
import { persist } from "zustand/middleware"
import { TripInputs, TripPlan } from "@/lib/planner/types"

interface PlannerState {
  inputs: TripInputs | null
  plan: TripPlan | null
  setInputs: (inputs: TripInputs) => void
  setPlan: (plan: TripPlan) => void
  reset: () => void
}

export const usePlannerStore = create<PlannerState>()(
  persist(
    (set) => ({
      inputs: null,
      plan: null,
      setInputs: (inputs) => set({ inputs }),
      setPlan: (plan) => set({ plan }),
      reset: () => set({ inputs: null, plan: null }),
    }),
    { name: "trip-planner" }
  )
)