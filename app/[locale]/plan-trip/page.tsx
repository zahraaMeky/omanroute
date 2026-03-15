import { Suspense } from "react"
import PlanTripContent from "./PlanTripContent"

export default function Page() {
  return (
    <Suspense fallback={<div className="wrapper py-20 text-center">Loading...</div>}>
      <PlanTripContent />
    </Suspense>
  )
}