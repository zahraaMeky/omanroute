"use client"
import { useLocale, useTranslations } from "next-intl"
import { destinations } from "@/data"
import Link from "next/link"
import { Compass,Clock,Ticket,Banknote} from "lucide-react"

interface Props {
  dest: (typeof destinations)[0]
}

export function DestinationsCard({ dest }: Props) {
  const locale = useLocale()
    const isAr = locale === "ar"
    const t = useTranslations("DestinationsCard")
    const c = useTranslations("DestinationCategory")


  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer mt-5 bg-(--bg-primary) shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">

      <div className="relative h-56 overflow-hidden">
        <img
          src={dest.image_url}
          alt={isAr ? dest.name.ar : dest.name.en}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {dest.featured && (
          <div className="absolute top-3 left-3">
            <span
              className="bg-(--color-primary) text-(--color-heading) text-xs font-semibold px-3 py-1 rounded-full"
              >
              {t("featured")}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/80 text-xs font-medium uppercase tracking-widest">
            {isAr ? dest.region.ar : dest.region.en}
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3
          className="text-base font-bold leading-snug text-(--text-heading)"
         
        >
          {isAr ? dest.name.ar : dest.name.en}
        </h3>

        <div className="text-(--color-text) flex items-center justify-between text-sm">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {dest.avg_visit_duration_minutes / 60}{t("visit")}
          </span>
          <span className="flex items-center gap-1">
            <Banknote  className="w-4 h-4" />
            {dest.ticket_cost_omr === 0 ? t("free") : `${dest.ticket_cost_omr} ${t("omr")}`}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {dest.categories.map((cat) => (
            <span
              key={cat}
              className="bg-[#2A9D8F18] text-[#2A9D8F] border border-[#2A9D8F40] text-xs px-2 py-0.5 rounded-full font-medium capitalize">
              {c(cat)}
            </span>
          ))}
        </div>

        <Link href={`/destinations/${dest.id}`}
          className="flex justify-center items-center gap-2 bg-(--color-primary) text-(--color-heading) w-full mt-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95">
            <Compass className="w-5 h-5" />
          {t("explore")}
        </Link>
      </div>

      <div
        className="bg-(--color-secondary) absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-2xl"
       
      />
    </div>
  )
}