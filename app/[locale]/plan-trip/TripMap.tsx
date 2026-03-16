"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { DayPlan } from "@/lib/planner/types"
import { Map } from "lucide-react"
import dynamic from "next/dynamic"

const DAY_COLORS = [
  "#FFC857",
  "#2A9D8F",
  "#E76F51",
  "#457B9D",
  "#A8DADC",
  "#6A4C93",
  "#F4A261",
]

interface Props {
  days: DayPlan[]
}

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false })

export default function TripMap({ days }: Props) {
  const [activeDay, setActiveDay] = useState(0)
  const t = useTranslations("TripPlan")

  return (
    <div className="flex flex-col gap-4">

      <h2 className="text-lg font-bold text-(--color-heading) flex items-center gap-2">
        <Map className="w-5 h-5 text-(--color-secondary)" />
        {t("mapTitle")}
      </h2>

      <div className="flex flex-wrap gap-2">
        {days.map((day, i) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(i)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border-2
              ${activeDay === i
                ? "border-transparent text-white"
                : "bg-gray-50 text-(--color-text) border-gray-200 hover:opacity-80"
              }`}
            style={activeDay === i
              ? { background: DAY_COLORS[i % DAY_COLORS.length] }
              : {}
            }
          >
            {t("dayLabel")} {day.day}
          </button>
        ))}
      </div>

      <div className="w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <MapComponent
          day={days[activeDay]}
          color={DAY_COLORS[activeDay % DAY_COLORS.length]}
        />
      </div>

    </div>
  )
}
