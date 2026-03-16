"use client"
import { useTranslations } from "next-intl"
import { statisticItems } from "@/data"

const Statistics = () => {
  const t = useTranslations("Statistics")

  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-2 min-w-0">
      {statisticItems.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className="flex items-center justify-start gap-1 sm:gap-2 min-w-0 overflow-hidden"
          >
            <div className="bg-(--color-secondary)/10 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl shrink-0">
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-(--color-secondary)" />
            </div>
            <div className="flex flex-col min-w-0 overflow-hidden">
              <p className="text-(--color-heading) text-sm sm:text-base md:text-xl font-bold leading-tight truncate">
                {t(`items.${item.key}.count`)}
              </p>
              <h3 className="text-[10px] sm:text-xs md:text-sm text-(--color-text) truncate">
                {t(`items.${item.key}.label`)}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Statistics