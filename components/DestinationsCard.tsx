"use client"
import { useLocale, useTranslations } from "next-intl"
import { destinations } from "@/data"
import { Link } from "@/i18n/navigation"
import { Compass, Clock, Banknote, Bookmark } from "lucide-react"
import { useSavedDestinations } from "@/lib/store/useSavedDestinations"
interface Props {
  dest: (typeof destinations)[0]
}

export function DestinationsCard({ dest }: Props) {
  const locale = useLocale()
  const isAr = locale === "ar"
  const t = useTranslations("DestinationsCard")
  const c = useTranslations("DestinationCategory")
  const { isSaved, toggleDestination } = useSavedDestinations()

  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer min-w-0 bg-(--bg-primary) shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
        <img
          src={dest.image_url}
          alt={isAr ? dest.name.ar : dest.name.en}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {dest.featured && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span className="bg-(--color-primary) text-(--color-heading) text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              {t("featured")}
            </span>
          </div>
        )}

        {/* Save button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleDestination(dest.id)
          }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
          style={{
            background: isSaved(dest.id) ? "#FFC857" : "rgba(0,0,0,0.4)",
          }}
          aria-label={isSaved(dest.id) ? "Unsave destination" : "Save destination"}
        >
          <Bookmark
            className="w-3 h-3 sm:w-4 sm:h-4"
            style={{ color: isSaved(dest.id) ? "#1C1C1E" : "white" }}
            fill={isSaved(dest.id) ? "#1C1C1E" : "none"}
          />
        </button>

        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
          <p className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-widest truncate">
            {isAr ? dest.region.ar : dest.region.en}
          </p>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 min-w-0">
        <h3 className="text-sm sm:text-base font-bold leading-snug text-(--text-heading) line-clamp-2">
          {isAr ? dest.name.ar : dest.name.en}
        </h3>

        <div className="text-(--color-text) flex items-center justify-between text-xs sm:text-sm gap-2 min-w-0">
          <span className="flex items-center gap-1 min-w-0 truncate">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">{dest.avg_visit_duration_minutes / 60}{t("visit")}</span>
          </span>
          <span className="flex items-center gap-1 shrink-0">
            <Banknote className="w-3 h-3 sm:w-4 sm:h-4" />
            {dest.ticket_cost_omr === 0 ? t("free") : `${dest.ticket_cost_omr} ${t("omr")}`}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {dest.categories.map((cat) => (
            <span
              key={cat}
              className="bg-[#2A9D8F18] text-[#2A9D8F] border border-[#2A9D8F40] text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-medium capitalize"
            >
              {c(cat)}
            </span>
          ))}
        </div>

        <Link
          href={`/destinations/${dest.id}`}
          className="flex justify-center items-center gap-1.5 sm:gap-2 bg-(--color-primary) text-(--color-heading) w-full mt-0.5 sm:mt-1 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
        >
          <Compass className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          {t("explore")}
        </Link>
      </div>

      <div className="bg-(--color-secondary) absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-xl sm:rounded-l-2xl" />
    </div>
  )
}