"use client"
import { useTranslations, useLocale } from "next-intl"
import {carouselItems} from "@/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { Compass } from "lucide-react"

export function CarouselDemo() {
  const locale = useLocale();
  const t = useTranslations("Carousel")
  return (
  <div className="relative w-full px-16"> 
  <Carousel className="w-full" opts={{
    loop: true,
    direction: locale === "ar" ? "rtl" : "ltr", 
  }}>
    <CarouselContent>
      {carouselItems.map((item) => (
        <CarouselItem key={item.id}>
          <div className="relative h-[400px] w-full overflow-hidden">
            <img
              src={item.image}
              alt={t(`slides.${item.key}.title`)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-3">
              <h3 className="text-white text-4xl font-bold drop-shadow-lg">
                {t(`slides.${item.key}.title`)} 
              </h3>
              <p className="text-white/80 text-base max-w-md drop-shadow">
                {t(`slides.${item.key}.description`)}
              </p>
              <Link
                href="/plan-trip"
                className="flex  gap-2 items-centermt-2 px-6 py-2 bg-[#FFC857] text-black font-semibold rounded-full hover:bg-[#b8965e] transition"
              >
                <Compass className="w-5 h-5" />
                  {t(`button`)}
              </Link>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>
  
  )
}
