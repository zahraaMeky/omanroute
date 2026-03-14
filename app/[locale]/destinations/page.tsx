import { Suspense } from "react"
import DestinationsContent from "./DestinationsContent"

export default function Page() {
  return (
    <Suspense fallback={<div className="wrapper py-20 text-center">Loading...</div>}>
      <DestinationsContent />
    </Suspense>
  )
}