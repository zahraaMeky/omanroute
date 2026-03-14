"use client"
import { destinations } from "@/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Clock, Banknote, MapPin, Users, Bookmark } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useSavedDestinations } from "@/lib/store/useSavedDestinations"

interface Props {
  id: string
}

export default function DestinationDetails({ id }: Props) {
  const locale = useLocale()
  const isAr = locale === "ar"
  const tc = useTranslations("DestinationCategory")
  const { isSaved, toggleDestination } = useSavedDestinations()

  const dest = destinations.find(d => d.id === id)
  if (!dest) notFound()

  const name = isAr ? dest.name.ar : dest.name.en
  const region = isAr ? dest.region.ar : dest.region.en

  return (
    <div className="wrapper">
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src={dest.image_url}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-1">
            {region}
          </p>
          <h1 className="text-4xl font-bold text-white">{name}</h1>
        </div>

        {/* Save button */}
        <button
          onClick={() => toggleDestination(dest.id)}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: isSaved(dest.id) ? "#FFC857" : "rgba(0,0,0,0.4)",
          }}
        >
          <Bookmark
            className="w-5 h-5"
            style={{ color: isSaved(dest.id) ? "#1C1C1E" : "white" }}
            fill={isSaved(dest.id) ? "#1C1C1E" : "none"}
          />
        </button>
      </div>

      <div className="wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="flex flex-col gap-4 md:col-span-2">

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <Clock className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {isAr ? "مدة الزيارة" : "Visit Duration"}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {dest.avg_visit_duration_minutes / 60}h
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <Banknote className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {isAr ? "التكلفة" : "Ticket Cost"}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {dest.ticket_cost_omr === 0
                    ? isAr ? "مجاني" : "Free"
                    : `${dest.ticket_cost_omr} ${isAr ? "ريال" : "OMR"}`}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <Users className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {isAr ? "مستوى الازدحام" : "Crowd Level"}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {dest.crowd_level} / 5
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <MapPin className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {isAr ? "المنطقة" : "Region"}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {region}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-semibold mb-3 text-(--color-heading)">
                {isAr ? "الفئات" : "Categories"}
              </p>
              <div className="flex flex-wrap gap-2">
                {dest.categories.map(cat => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1 bg-[#2A9D8F18] text-(--color-secondary) border border-[#2A9D8F40] rounded-full font-medium capitalize"
                  >
                    {tc.has(cat) ? tc(cat) : cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-semibold mb-3 text-(--color-heading)">
                {isAr ? "أفضل أوقات الزيارة" : "Best Months to Visit"}
              </p>
              <div className="flex flex-wrap gap-2">
                {dest.recommended_months.map(month => (
                  <span
                    key={month}
                    className="text-xs px-3 py-1 rounded-full font-medium bg-[#FFC85720] text-[#1C1C1E] border border-[#FFC857]"
                  >
                    {new Date(0, month - 1).toLocaleString(isAr ? "ar" : "en", { month: "long" })}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-3">
            <p className="text-sm font-semibold text-(--color-heading)">
              {isAr ? "الموقع" : "Location"}
            </p>
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${dest.lat},${dest.lng}&z=13&output=embed`}
              />
            </div>
            <p className="text-xs text-(--color-text)">
              {dest.lat}, {dest.lng}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}