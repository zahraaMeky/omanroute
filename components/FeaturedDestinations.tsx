"use client"
import { useTranslations } from "next-intl"
import { destinations } from "@/data"
import { DestinationsCard } from "./DestinationsCard"

const FeaturedDestinations = () => {
  const t = useTranslations("FeaturedDestinations")
  const featuredDestinations = destinations.filter((item) => item.featured)

  return (
    <div className="wrapper py-10 sm:py-12 md:py-16">
      {/* Text content */}
      <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 flex flex-col items-center gap-3 sm:gap-4 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-heading) leading-tight">
          {t("title")}
        </h2>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-1 bg-(--color-primary) rounded-full" />
          <div className="w-2 h-1 bg-(--color-primary) rounded-full opacity-50" />
          <div className="w-1 h-1 bg-(--color-primary) rounded-full opacity-25" />
        </div>
        <p className="text-(--color-text)/70 text-base sm:text-lg leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Destination cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {featuredDestinations.map((dest) => (
          <DestinationsCard key={dest.id} dest={dest} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestinations