"use client"
import { useTranslations } from "next-intl"
import {statisticItems} from "@/data"
const Statistics = () => {
      const t = useTranslations("Statistics")

  return (
    <div className="grid grid-cols-3">
      {statisticItems.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.id} className="flex items-center justify-srtart gap-2">
            <div className="bg-(--color-secondary)/10 p-3 rounded-xl">
                <Icon className="w-5 h-5 text-(--color-secondary)" />
            </div>
            <div className="flex flex-col">
                <p className="text-(--color-heading) text-xl font-bold">{t(`items.${item.key}.count`)}</p>
                <h3 className="text-sm  text-(--color-text)">{t(`items.${item.key}.label`)}</h3>  
            </div>
           
        </div>
      )})}
    </div>
  )
}

export default Statistics