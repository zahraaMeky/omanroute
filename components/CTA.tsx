"use client"
import Link from "next/link"
import { useTranslations} from "next-intl"
import { Compass, MapPin, Map, Plane, Star } from "lucide-react"

const CTA = () => {
  const t = useTranslations("CTA")
  return (
    <div className='relative pb-16 pt-5 overflow-hidden bg-(--bg-primary)'>
        <Compass size={38} strokeWidth={1.5} className="absolute top-12 left-12 text-(--color-secondary)/60" />
        <Map size={38} strokeWidth={1.5} className="absolute bottom-12 right-14 text-(--color-secondary)/60" />
        <Plane size={32} strokeWidth={1.5} className="absolute top-16 right-20 text-(--color-secondary)/60" />
        <Star size={24} strokeWidth={1.5} className="absolute bottom-16 left-28 text-(--color-secondary)/60" />
        <MapPin size={28} strokeWidth={1.5} className="absolute top-1/3 left-16 text-(--color-secondary)/60" />
        {/* card */}
        <div className="rounded-[2rem]  bg-gradient-to-b from-(--color-primary) to-(--color-secondary) max-w-4xl mx-auto px-8 py-12 flex flex-col items-center">
            {/* text content */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold text-(--text-heading) leading-tight mb-5">{t("title")}{" "}
                    <span className="text-(--text-heading) underline decoration-[#1C1C1E] decoration-2 underline-offset-4ext-white drop-shadow-[0_2px_12px_rgba(255,200,87,0.9)]">{t("highlight")}</span>
                </h3>
                <p className="text-(--color-heading) text-base font-light leading-relaxed max-w-xl mb-5">{t("description")}</p>
            </div>
            {/* buttons */}
            <div className="flex items-center justify-center gap-4">
                <Link href="/plan-trip" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-(--color-primary) text-black font-semibold rounded-full hover:bg-[#b8965e] transition">
                    <MapPin className="w-5 h-5" />
                    {t("planbutton")}
                </Link>
                <Link href="/destinations" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-(--color-primary) text-black font-semibold rounded-full hover:bg-[#b8965e] transition">
                    <Compass className="w-5 h-5" />
                    {t("distinationbutton")}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CTA