"use client"
import { useTranslations, useLocale } from "next-intl"
import { carouselItems } from "@/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "@/i18n/navigation"
import { Compass } from "lucide-react"

export function CarouselDemo() {
  const locale = useLocale()
  const t = useTranslations("Carousel")
  return (
    <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          direction: locale === "ar" ? "rtl" : "ltr",
        }}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[480px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={t(`slides.${item.key}.title`)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-2 sm:gap-3">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                    {t(`slides.${item.key}.title`)}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base max-w-md drop-shadow line-clamp-2 sm:line-clamp-none">
                    {t(`slides.${item.key}.description`)}
                  </p>
                  <Link
                    href="/destinations"
                    className="flex gap-1.5 sm:gap-2 items-center mt-1 sm:mt-2 px-4 py-1.5 sm:px-6 sm:py-2 bg-[#FFC857] text-black font-semibold rounded-full hover:bg-[#b8965e] transition text-sm sm:text-base"
                  >
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    {t("button")}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:left-2 md:-left-12 size-7 sm:size-8" />
        <CarouselNext className="right-1 sm:right-2 md:-right-12 size-7 sm:size-8" />
      </Carousel>
    </div>
  )
}
