"use client"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { destinations, Category } from "@/data"

type Destination = (typeof destinations)[0]

export interface Filters {
  category: string
  region: string
  month: string
  sortBy: string
}

const DEFAULT_FILTERS: Filters = {
  category: "all",
  region: "all",
  month: "all",
  sortBy: "none",
}

export function useFilters(data: Destination[]) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const filters = useMemo<Filters>(() => ({
    category: searchParams.get("category") ?? "all",
    region: searchParams.get("region") ?? "all",
    month: searchParams.get("month") ?? "all",
    sortBy: searchParams.get("sortBy") ?? "none",
  }), [searchParams])

  const setFilter = (key: keyof Filters, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all" || value === "none") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    router.push(pathname)
  }

  const filtered = useMemo(() => {
    let result = data.filter(dest => {
      const matchCategory =
        filters.category === "all" ||
        dest.categories.includes(filters.category as Category)

      const matchRegion =
        filters.region === "all" ||
        dest.region.en === filters.region

      const matchMonth =
        filters.month === "all" ||
        dest.recommended_months.includes(Number(filters.month))

      return matchCategory && matchRegion && matchMonth
    })

    if (filters.sortBy === "crowd_asc") {
      result = [...result].sort((a, b) => a.crowd_level - b.crowd_level)
    } else if (filters.sortBy === "crowd_desc") {
      result = [...result].sort((a, b) => b.crowd_level - a.crowd_level)
    } else if (filters.sortBy === "cost_asc") {
      result = [...result].sort((a, b) => a.ticket_cost_omr - b.ticket_cost_omr)
    } else if (filters.sortBy === "cost_desc") {
      result = [...result].sort((a, b) => b.ticket_cost_omr - a.ticket_cost_omr)
    }

    return result
  }, [data, filters])

  const categories = ["all", ...new Set(data.flatMap(d => d.categories))]
  const regions = ["all", ...new Set(data.map(d => d.region.en))]

  return {
    filtered,
    filters,
    setFilter,
    resetFilters,
    categories,
    regions,
  }
}