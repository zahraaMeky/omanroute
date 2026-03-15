"use client"
import { useTranslations, useLocale } from "next-intl"
import { TripPlan } from "@/lib/planner/types"
import { destinations } from "@/data"
import TripMap from "./TripMap"
import {
  MapPin,
  Clock,
  Car,
  Hotel,
  Utensils,
  Ticket,
  CheckCircle,
  PartyPopper,
} from "lucide-react"

interface Props {
  plan: TripPlan
}

export default function TripPlanDisplay({ plan }: Props) {
  const t = useTranslations("TripPlan")
  const tc = useTranslations("DestinationCategory")
  const locale = useLocale()
  const isAr = locale === "ar"

  const getRegionName = (regionEn: string) => {
    const dest = destinations.find(d => d.region.en === regionEn)
    return isAr ? (dest?.region.ar ?? regionEn) : regionEn
  }

  const getTopScoreReasons = (scoreComponents: {
    interest: number
    season: number
    crowd: number
    cost: number
  }) => {
    const reasons = [
      { key: "interest", value: scoreComponents.interest },
      { key: "season",   value: scoreComponents.season },
      { key: "crowd",    value: 1 - scoreComponents.crowd },
      { key: "cost",     value: 1 - scoreComponents.cost },
    ]
    return reasons.sort((a, b) => b.value - a.value).slice(0, 2)
  }

  const reasonLabel = (key: string) => {
    const map: Record<string, string> = {
      interest: t("reasonInterest"),
      season:   t("reasonSeason"),
      crowd:    t("reasonCrowd"),
      cost:     t("reasonCost"),
    }
    return map[key]
  }

  return (
    <div className="mt-8 flex flex-col gap-6">

      {/* Plan Ready Banner */}
      <div className="p-4 rounded-2xl flex items-center gap-3 bg-[#2A9D8F18] border border-[#2A9D8F40]">
        <PartyPopper className="w-5 h-5 text-(--color-secondary)" />
        <p className="text-base font-bold text-(--color-secondary)">
          {t("planReady")}
        </p>
      </div>

      {/* Map */}
      <div className="p-6 rounded-3xl bg-(--bg-primary) border border-gray-100 shadow-sm">
        <TripMap days={plan.days} />
      </div>

      {/* Region Allocation */}
      <div className="p-6 rounded-3xl bg-(--bg-primary) border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-(--color-heading) mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-(--color-secondary)" />
          {t("regionAllocation")}
        </h2>
        <div className="flex flex-wrap gap-3">
          {plan.regionAllocation.map(alloc => (
            <div
              key={alloc.region}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2A9D8F18] border border-[#2A9D8F40]"
            >
              <MapPin className="w-4 h-4 text-(--color-secondary)" />
              <span className="text-sm font-semibold text-(--color-secondary) capitalize">
                {getRegionName(alloc.region)}
              </span>
              <span className="text-xs text-(--color-text)">
                {alloc.days} {alloc.days === 1 ? t("day") : t("days")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Day by Day */}
      {plan.days.map(day => (
        <div
          key={day.day}
          className="p-6 rounded-3xl bg-(--bg-primary) border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-lg font-bold text-(--color-heading) flex items-center gap-2">
              <Clock className="w-5 h-5 text-(--color-secondary)" />
              {t("dayTitle")} {day.day}
              <span className="text-sm font-normal text-(--color-text) capitalize">
                — {getRegionName(day.region)}
              </span>
            </h2>
            <div className="flex items-center gap-3 text-xs text-(--color-text)">
              <span className="flex items-center gap-1">
                <Car className="w-3 h-3 text-(--color-secondary)" />
                {day.totalKm} {t("km")}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-(--color-secondary)" />
                {day.totalHours}{t("hours")}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {day.stops.map((stop, i) => (
              <div key={stop.destination.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-1 shrink-0 bg-(--color-primary)" />
                  {i < day.stops.length - 1 && (
                    <div className="w-0.5 flex-1 mt-1 bg-gray-200" />
                  )}
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-(--color-heading) text-sm">
                        {isAr ? stop.destination.name.ar : stop.destination.name.en}
                      </p>
                      <p className="text-xs text-(--color-text) mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {stop.arrivalTime} — {stop.departureTime}
                      </p>
                    </div>
                    <div className="text-right shrink-0 flex flex-col gap-1">
                      <p className="text-xs font-medium text-(--color-text) flex items-center gap-1 justify-end">
                        <Ticket className="w-3 h-3 text-(--color-secondary)" />
                        {stop.destination.ticket_cost_omr === 0
                          ? t("free")
                          : `${stop.destination.ticket_cost_omr} ${t("omr")}`}
                      </p>
                      {stop.distanceFromPrev > 0 && (
                        <p className="text-xs text-(--color-text) flex items-center gap-1 justify-end">
                          <Car className="w-3 h-3 text-(--color-secondary)" />
                          +{stop.distanceFromPrev} {t("km")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {stop.destination.categories.map(cat => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#2A9D8F18] text-(--color-secondary) border border-[#2A9D8F40] capitalize"
                      >
                        {tc.has(cat) ? tc(cat) : cat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {getTopScoreReasons(stop.scoreComponents).map(reason => (
                      <span
                        key={reason.key}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#FFC85720] border border-[#FFC85740] text-(--color-heading) flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-(--color-primary)" />
                        {reasonLabel(reason.key)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cost Breakdown */}
      <div className="p-6 rounded-3xl bg-(--bg-primary) border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-(--color-heading) mb-4 flex items-center gap-2">
          <Ticket className="w-5 h-5 text-(--color-secondary)" />
          {t("costBreakdown")}
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-(--color-text)">
              <Car className="w-4 h-4 text-(--color-secondary)" />
              {t("fuel")}
            </span>
            <span className="text-sm font-medium text-(--color-heading)">
              {plan.cost.fuel} {t("omr")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-(--color-text)">
              <Ticket className="w-4 h-4 text-(--color-secondary)" />
              {t("tickets")}
            </span>
            <span className="text-sm font-medium text-(--color-heading)">
              {plan.cost.tickets} {t("omr")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-(--color-text)">
              <Utensils className="w-4 h-4 text-(--color-secondary)" />
              {t("food")}
            </span>
            <span className="text-sm font-medium text-(--color-heading)">
              {plan.cost.food} {t("omr")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-(--color-text)">
              <Hotel className="w-4 h-4 text-(--color-secondary)" />
              {t("hotel")}
            </span>
            <span className="text-sm font-medium text-(--color-heading)">
              {plan.cost.hotel} {t("omr")}
            </span>
          </div>

          <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
            <span className="text-sm font-bold text-(--color-heading)">
              {t("total")}
            </span>
            <span className="text-lg font-bold text-(--color-primary)">
              {plan.cost.total} {t("omr")}
            </span>
          </div>
        </div>
      </div>

      {/* Total Distance */}
      <div className="p-4 rounded-2xl flex items-center justify-between bg-[#2A9D8F18] border border-[#2A9D8F40]">
        <span className="flex items-center gap-2 text-sm font-semibold text-(--color-secondary)">
          <Car className="w-4 h-4" />
          {t("totalDistance")}
        </span>
        <span className="text-sm font-bold text-(--color-secondary)">
          {plan.totalKm} {t("km")}
        </span>
      </div>

    </div>
  )
}