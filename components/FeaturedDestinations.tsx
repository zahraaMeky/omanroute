"use client"
import { useTranslations } from "next-intl"
import { destinations } from "@/data"
import { FeaturedDestinationsCard } from "./FeaturedDestinationsCard"

const FAMOUS_IDS = ["dest_0006", "dest_0038", "dest_0005", "dest_0051"];

const FeaturedDestinations = () => {
  const t = useTranslations("FeaturedDestinations")
  const featuredDestinations = destinations.filter(item => item.featured);


  return (
    <div className="wrapper py-16">
      {/* Text content */}
      <div className="text-center max-w-2xl mx-auto mb-6 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-(--text-heading) leading-tight">
          {t("title")}
        </h2>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-1 bg-(--color-primary) rounded-full" />
          <div className="w-2 h-1 bg-(--color-primary) rounded-full opacity-50" />
          <div className="w-1 h-1 bg-(--color-primary) rounded-full opacity-25" />
        </div>
        <p className="text-(--color-text)/70 text-lg leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Destination cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredDestinations.map((dest) => (
          <FeaturedDestinationsCard key={dest.id} dest={dest} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestinations