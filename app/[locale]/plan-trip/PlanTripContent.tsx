"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { useSavedDestinations } from "@/lib/store/useSavedDestinations"
import { usePlannerStore } from "@/lib/store/usePlannerStore"
import { generateTripPlan } from "@/lib/planner"
import { destinations } from "@/data"
import { Calendar, Wallet, Zap, Tag, Map, RotateCcw } from "lucide-react"
import { TripInputs } from "@/lib/planner/types"
import TripPlanDisplay from "./TripPlanDisplay"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PlanTripContent() {
  const t = useTranslations("PlanTrip")
  const tc = useTranslations("DestinationCategory")
  const tFilters = useTranslations("Filters")
  const { saved } = useSavedDestinations()
  const { setInputs, setPlan, plan, reset } = usePlannerStore()

  const savedDestinations = destinations.filter(d => saved.includes(d.id))
  const savedCategories = [...new Set(savedDestinations.flatMap(d => d.categories))]

  const [inputs, setLocalInputs] = useState<TripInputs>({
    days: 3,
    budget: "medium",
    month: new Date().getMonth() + 1,
    intensity: "balanced",
    categories: savedCategories,
  })

  const handleGenerate = () => {
    setInputs(inputs)
    const result = generateTripPlan(destinations, inputs)
    setPlan(result)
  }

  return (
    <div className="wrapper py-12">
      <div className="max-w-3xl w-full mx-auto">

        <div className="text-center mb-10 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-(--color-heading)">
            {t("title")}
          </h1>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-1 rounded-full bg-(--color-primary)" />
            <div className="w-2 h-1 rounded-full opacity-50 bg-(--color-primary)" />
            <div className="w-1 h-1 rounded-full opacity-25 bg-(--color-primary)" />
          </div>
          <p className="text-lg text-(--color-text)">
            {t("description")}
          </p>
        </div>

        {savedCategories.length > 0 ? (
          <div className="mb-6 p-4 rounded-2xl flex items-center gap-3 bg-[#2A9D8F18] border border-[#2A9D8F40]">
            <Tag className="w-5 h-5 text-(--color-secondary)" />
            <p className="text-sm text-(--color-secondary)">
              {t("savedNotice")} {savedCategories.map(c => tc(c)).join(", ")}
            </p>
          </div>
        ) : (
          <div className="mb-6 p-4 rounded-2xl flex items-center gap-3 bg-[#FFC85720] border border-[#FFC85760]">
            <Tag className="w-5 h-5 text-(--color-primary)" />
            <p className="text-sm text-(--color-heading)">
              {t("noSavedNotice")}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-6 p-6 md:p-8 rounded-3xl shadow-sm bg-(--bg-primary) border border-gray-100">

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-(--color-heading)">
              <Calendar className="w-4 h-4 text-(--color-secondary)" />
              {t("duration")}
            </label>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7].map(day => (
                <button
                  key={day}
                  onClick={() => setLocalInputs(prev => ({ ...prev, days: day }))}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90
                    ${inputs.days === day
                      ? "bg-(--color-primary) text-(--color-heading) border-2 border-(--color-primary)"
                      : "bg-gray-50 text-(--color-text) border-2 border-gray-200"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-(--color-heading)">
              <Wallet className="w-4 h-4 text-(--color-secondary)" />
              {t("budget")}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["low", "medium", "luxury"] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setLocalInputs(prev => ({ ...prev, budget: tier }))}
                  className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90
                    ${inputs.budget === tier
                      ? "bg-(--color-primary) text-(--color-heading) border-2 border-(--color-primary)"
                      : "bg-gray-50 text-(--color-text) border-2 border-gray-200"
                    }`}
                >
                  {tier === "low"
                    ? t("budgetLow")
                    : tier === "medium"
                    ? t("budgetMedium")
                    : t("budgetLuxury")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-(--color-heading)">
              <Calendar className="w-4 h-4 text-(--color-secondary)" />
              {t("month")}
            </label>
            <Select
              value={String(inputs.month)}
              onValueChange={val => setLocalInputs(prev => ({ ...prev, month: Number(val) }))}
            >
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "1",  label: tFilters("january") },
                  { value: "2",  label: tFilters("february") },
                  { value: "3",  label: tFilters("march") },
                  { value: "4",  label: tFilters("april") },
                  { value: "5",  label: tFilters("may") },
                  { value: "6",  label: tFilters("june") },
                  { value: "7",  label: tFilters("july") },
                  { value: "8",  label: tFilters("august") },
                  { value: "9",  label: tFilters("september") },
                  { value: "10", label: tFilters("october") },
                  { value: "11", label: tFilters("november") },
                  { value: "12", label: tFilters("december") },
                ].map(month => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-(--color-heading)">
              <Zap className="w-4 h-4 text-(--color-secondary)" />
              {t("intensity")}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["relaxed", "balanced", "packed"] as const).map(intensity => (
                <button
                  key={intensity}
                  onClick={() => setLocalInputs(prev => ({ ...prev, intensity }))}
                  className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90
                    ${inputs.intensity === intensity
                      ? "bg-(--color-primary) text-(--color-heading) border-2 border-(--color-primary)"
                      : "bg-gray-50 text-(--color-text) border-2 border-gray-200"
                    }`}
                >
                  {intensity === "relaxed"
                    ? t("intensityRelaxed")
                    : intensity === "balanced"
                    ? t("intensityBalanced")
                    : t("intensityPacked")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-(--color-heading)">
              <Tag className="w-4 h-4 text-(--color-secondary)" />
              {t("categories")}
            </label>
            <div className="flex flex-wrap gap-2">
              {["culture", "beach", "nature", "food", "mountain", "desert"].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setLocalInputs(prev => ({
                      ...prev,
                      categories: prev.categories.includes(cat)
                        ? prev.categories.filter(c => c !== cat)
                        : [...prev.categories, cat],
                    }))
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 hover:opacity-90
                    ${inputs.categories.includes(cat)
                      ? "bg-(--color-secondary) text-white border-2 border-(--color-secondary)"
                      : "bg-gray-50 text-(--color-text) border-2 border-gray-200"
                    }`}
                >
                  {tc(cat)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:opacity-90 active:scale-95 mt-2 bg-(--color-primary) text-(--color-heading) flex items-center justify-center gap-2"
          >
            <Map className="w-5 h-5" />
            {t("generate")}
          </button>

          {plan && (
            <button
              onClick={reset}
              className="w-full py-3 rounded-2xl text-sm font-semibold transition-all duration-200 hover:opacity-90 bg-gray-50 text-(--color-text) border-2 border-gray-200 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              {t("reset")}
            </button>
          )}
        </div>

        {plan && <TripPlanDisplay plan={plan} />}

      </div>
    </div>
  )
}