import { useTranslations, useLocale } from "next-intl"
import { SlidersHorizontal, X } from "lucide-react"
import { Filters } from "@/hooks/useFilters"
import { destinations } from "@/data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterBarProps {
  filters: Filters
  categories: string[]
  regions: string[]
  onFilterChange: (key: keyof Filters, value: string) => void
  onReset: () => void
  totalResults: number
}

export function FilterBar({
  filters,
  categories,
  regions,
  onFilterChange,
  onReset,
  totalResults,
}: FilterBarProps) {
  const t = useTranslations("Filters")
  const tc = useTranslations("DestinationCategory")
  const locale = useLocale()
  const isAr = locale === "ar"

  const isFiltered =
    filters.category !== "all" ||
    filters.region !== "all" ||
    filters.month !== "all" ||
    filters.sortBy !== "none"

  const months = [
    { value: "all", label: t("allSeasons") },
    { value: "1", label: t("january") },
    { value: "2", label: t("february") },
    { value: "3", label: t("march") },
    { value: "4", label: t("april") },
    { value: "5", label: t("may") },
    { value: "6", label: t("june") },
    { value: "7", label: t("july") },
    { value: "8", label: t("august") },
    { value: "9", label: t("september") },
    { value: "10", label: t("october") },
    { value: "11", label: t("november") },
    { value: "12", label: t("december") },
  ]

  const sortOptions = [
    { value: "none", label: t("default") },
    { value: "crowd_asc", label: t("leastCrowded") },
    { value: "crowd_desc", label: t("mostPopular") },
    { value: "cost_asc", label: t("lowestCost") },
    { value: "cost_desc", label: t("highestCost") },
  ]

  // build region map: { en: ar } from data
  const regionMap = Object.fromEntries(
    destinations.map(d => [d.region.en, d.region.ar])
  )

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
      <SlidersHorizontal className="w-4 h-4" style={{ color: "#2A9D8F" }} />

      <Select
        value={filters.category}
        onValueChange={val => onFilterChange("category", val)}
      >
        <SelectTrigger className="w-full sm:w-40 rounded-xl">
          <SelectValue placeholder={t("allCategories")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("allCategories")}</SelectItem>
          {categories.filter(c => c !== "all").map(cat => (
            <SelectItem key={cat} value={cat}>
              {tc.has(cat) ? tc(cat) : cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.region}
        onValueChange={val => onFilterChange("region", val)}
      >
        <SelectTrigger className="w-full sm:w-40 rounded-xl">
          <SelectValue placeholder={t("allRegions")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("allRegions")}</SelectItem>
          {regions.filter(r => r !== "all").map(region => (
            <SelectItem key={region} value={region}>
              {isAr ? (regionMap[region] ?? region) : region}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.month}
        onValueChange={val => onFilterChange("month", val)}
      >
        <SelectTrigger className="w-full sm:w-40 rounded-xl">
          <SelectValue placeholder={t("allSeasons")} />
        </SelectTrigger>
        <SelectContent>
          {months.map(m => (
            <SelectItem key={m.value} value={m.value}>
              {m.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.sortBy}
        onValueChange={val => onFilterChange("sortBy", val)}
      >
        <SelectTrigger className="w-full sm:w-44 rounded-xl">
          <SelectValue placeholder={t("sortBy")} />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map(s => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isFiltered && (
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all"
          style={{ background: "#2A9D8F", color: "white" }}
        >
          <X className="w-3 h-3" />
          {t("reset")}
        </button>
      )}

      <span className="ml-auto text-sm font-medium" style={{ color: "#475569" }}>
        {totalResults} {isAr ? "وجهة" : "destinations found"}
      </span>
    </div>
  )
}