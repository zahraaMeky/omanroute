"use client"
import { destinations } from "@/data"
import { usePagination } from "@/hooks/usePagination"
import { useFilters } from "@/hooks/useFilters"
import { AppPagination } from "@/components/Pagination"
import { DestinationsCard } from "@/components/DestinationsCard"
import { FilterBar } from "@/components/FilterBar"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"

export default function DestinationsContent() {
  const t = useTranslations("DestinationsPage")
  const locale = useLocale()
  const isAr = locale === "ar"

  const {
    filtered,
    filters,
    setFilter,
    resetFilters,
    categories,
    regions,
  } = useFilters(destinations)

  const { currentItems, currentPage, totalPages, goToPage } =
    usePagination(filtered, 12)

  return (
    <div className="wrapper">
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/destinationhero.png"
          alt="Destinations Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4">
          <h1 className="text-4xl font-bold text-white leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            {t("description")}
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-1 rounded-full bg-(--color-primary)" />
            <div className="w-2 h-1 rounded-full opacity-50 bg-(--color-primary)" />
            <div className="w-1 h-1 rounded-full opacity-25 bg-(--color-primary)" />
          </div>
        </div>
      </div>

      <div className="wrapper py-12">
        <FilterBar
          filters={filters}
          categories={categories}
          regions={regions}
          onFilterChange={setFilter}
          onReset={resetFilters}
          totalResults={filtered.length}
        />

        {currentItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <p className="text-2xl">🔍</p>
            <p className="text-lg font-medium" style={{ color: "#1C1C1E" }}>
              {isAr ? "لا توجد نتائج" : "No destinations found"}
            </p>
            <p className="text-sm" style={{ color: "#475569" }}>
              {isAr ? "حاول تغيير الفلاتر" : "Try changing the filters"}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {currentItems.map(dest => (
                <DestinationsCard key={dest.id} dest={dest} />
              ))}
            </div>
            <AppPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </>
        )}
      </div>
    </div>
  )
}