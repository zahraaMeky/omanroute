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
  const t = useTranslations("DestinationDetails")
  const tc = useTranslations("DestinationCategory")
  const { isSaved, toggleDestination } = useSavedDestinations()

  const dest = destinations.find(d => d.id === id)
  if (!dest) notFound()

  const name = isAr ? dest.name.ar : dest.name.en
  const region = isAr ? dest.region.ar : dest.region.en

  const crowdLabel = () => {
    if (dest.crowd_level <= 1) return t("crowdVeryQuiet")
    if (dest.crowd_level <= 2) return t("crowdQuiet")
    if (dest.crowd_level <= 3) return t("crowdModerate")
    if (dest.crowd_level <= 4) return t("crowdBusy")
    return t("crowdVeryBusy")
  }

  const crowdColor = () => {
    if (dest.crowd_level <= 2) return "bg-(--color-secondary)"
    if (dest.crowd_level <= 3) return "bg-(--color-primary)"
    return "bg-red-400"
  }

  const generatedDescription = () => {
    const cats = dest.categories.map(c => tc.has(c) ? tc(c) : c).join(", ")
    const months = dest.recommended_months
      .map(m => new Date(0, m - 1).toLocaleString(isAr ? "ar" : "en", { month: "long" }))
      .join(", ")
    const hours = dest.avg_visit_duration_minutes / 60
    const ticket = dest.ticket_cost_omr === 0
      ? t("descriptionFree")
      : `${t("descriptionCost")} ${dest.ticket_cost_omr} ${t("omr")}`

    return `${name} ${t("descriptionIntro")} ${cats} ${t("descriptionLocated")} ${region}. ${t("descriptionRecommended")} ${months}. ${t("descriptionDuration")} ${hours} ${t("descriptionHours")}. ${ticket}.`
  }

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

        <button
          onClick={() => toggleDestination(dest.id)}
          className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110
            ${isSaved(dest.id) ? "bg-(--color-primary)" : "bg-black/40"}`}
        >
          <Bookmark
            className={`w-5 h-5 ${isSaved(dest.id) ? "text-(--color-heading)" : "text-white"}`}
            fill={isSaved(dest.id) ? "currentColor" : "none"}
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
                  {t("visitDuration")}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {dest.avg_visit_duration_minutes / 60}h
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <Banknote className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {t("ticketCost")}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {dest.ticket_cost_omr === 0
                    ? t("free")
                    : `${dest.ticket_cost_omr} ${t("omr")}`}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-2">
                <Users className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {t("crowdLevel")}
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(level => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full transition-all duration-200
                        ${level <= dest.crowd_level ? crowdColor() : "bg-gray-100"}`}
                    />
                  ))}
                </div>
                <p className="text-xs font-medium text-(--color-text)">
                  {crowdLabel()}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-1">
                <MapPin className="w-5 h-5 text-(--color-secondary)" />
                <p className="text-xs text-(--color-text)">
                  {t("region")}
                </p>
                <p className="font-bold text-(--color-heading)">
                  {region}
                </p>
              </div>
            </div>

            {/* Generated Description */}
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-semibold mb-3 text-(--color-heading)">
                {t("about")}
              </p>
              <p className="text-sm text-(--color-text) leading-relaxed">
                {generatedDescription()}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-semibold mb-3 text-(--color-heading)">
                {t("categories")}
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
                {t("bestMonths")}
              </p>
              <div className="flex flex-wrap gap-2">
                {dest.recommended_months.map(month => (
                  <span
                    key={month}
                    className="text-xs px-3 py-1 rounded-full font-medium bg-[#FFC85720] text-(--color-heading) border border-[#FFC857]"
                  >
                    {new Date(0, month - 1).toLocaleString(
                      isAr ? "ar" : "en", { month: "long" }
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col gap-3">
            <p className="text-sm font-semibold text-(--color-heading)">
              {t("location")}
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