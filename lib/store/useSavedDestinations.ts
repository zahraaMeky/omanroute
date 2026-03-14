import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SavedState {
  saved: string[]
  saveDestination: (id: string) => void
  removeDestination: (id: string) => void
  toggleDestination: (id: string) => void
  isSaved: (id: string) => boolean
}

export const useSavedDestinations = create<SavedState>()(
  persist(
    (set, get) => ({
      saved: [],

      saveDestination: (id) =>
        set((state) => ({
          saved: state.saved.includes(id)
            ? state.saved
            : [...state.saved, id],
        })),

      removeDestination: (id) =>
        set((state) => ({
          saved: state.saved.filter((item) => item !== id),
        })),

      toggleDestination: (id) =>
        set((state) => ({
          saved: state.saved.includes(id)
            ? state.saved.filter((item) => item !== id)
            : [...state.saved, id],
        })),

      isSaved: (id) => get().saved.includes(id),
    }),
    {
      name: "saved-destinations",
    }
  )
)