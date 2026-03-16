"use client"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Compass, MapPin, Map, Plane, Star } from "lucide-react"

const CTA = () => {
  const t = useTranslations("CTA")
  return (
    <div className="relative py-8 sm:py-10 md:pt-5 md:pb-16 overflow-hidden bg-(--bg-primary)">
      {/* Decorative icons - smaller and closer on mobile */}
      <Compass
        className="absolute top-6 left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-[38px] md:h-[38px] text-(--color-secondary)/60 md:top-12 md:left-12"
        strokeWidth={1.5}
      />
      <Map
        className="absolute bottom-6 right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-[38px] md:h-[38px] text-(--color-secondary)/60 md:bottom-12 md:right-14 hidden sm:block"
        strokeWidth={1.5}
      />
      <Plane
        className="absolute top-10 right-6 w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-(--color-secondary)/60 md:top-16 md:right-20 hidden sm:block"
        strokeWidth={1.5}
      />
      <Star
        className="absolute bottom-10 left-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-(--color-secondary)/60 md:bottom-16 md:left-28 hidden sm:block"
        strokeWidth={1.5}
      />
      <MapPin
        className="absolute top-1/3 left-6 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-(--color-secondary)/60 md:left-16 hidden sm:block"
        strokeWidth={1.5}
      />

      {/* card */}
      <div className="rounded-2xl sm:rounded-[2rem] bg-gradient-to-b from-(--color-primary) to-(--color-secondary) max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 flex flex-col items-center">
        {/* text content */}
        <div className="flex flex-col items-center text-center px-1 sm:px-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-heading) leading-tight mb-3 sm:mb-5">
            {t("title")}{" "}
            <span className="text-(--text-heading) underline decoration-[#1C1C1E] decoration-2 underline-offset-4 drop-shadow-[0_2px_12px_rgba(255,200,87,0.9)]">
              {t("highlight")}
            </span>
          </h3>
          <p className="text-(--color-heading) text-sm sm:text-base font-light leading-relaxed max-w-xl mb-4 sm:mb-5">
            {t("description")}
          </p>
        </div>
        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
          <Link
            href="/plan-trip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-(--color-primary) text-black font-semibold rounded-full hover:bg-[#b8965e] transition text-sm sm:text-base"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            {t("planbutton")}
          </Link>
          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-(--color-primary) text-black font-semibold rounded-full hover:bg-[#b8965e] transition text-sm sm:text-base"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            {t("distinationbutton")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA