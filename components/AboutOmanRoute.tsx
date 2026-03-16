"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Statistics from "./Statistics"

const AboutOmanRoute = () => {
  const t = useTranslations("AboutOmanRoute")
  return (
    <div className="wrapper py-8 sm:py-10 md:py-12">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-7 md:gap-8 lg:gap-10">
        {/* Text side - appears second on mobile, first on desktop */}
        <div className="flex flex-col w-full md:w-[70%] min-w-0 space-y-3 sm:space-y-4 order-2 md:order-1">
          <p className="text-sm sm:text-base uppercase tracking-widest text-(--color-secondary)">
            {t("subtitle")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-heading) leading-tight">
            {t("title")}
          </h2>
          <div className="w-12 h-[2px] bg-(--color-primary) shrink-0" />
          <p className="text-(--color-text)/70 text-base sm:text-lg leading-relaxed max-w-lg">
            {t("description")}
          </p>
          {/* statistics */}
          <div className="w-full max-w-xl mt-2 sm:mt-3">
            <Statistics />
          </div>
        </div>

        {/* Image side - appears first on mobile, second on desktop */}
        <div className="w-full flex-1 min-w-0 flex justify-center md:justify-end order-1 md:order-2">
          <Image
            src="/images/fast-and-easy-transfers.svg"
            alt="About Oman"
            width={400}
            height={400}
            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-none"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutOmanRoute