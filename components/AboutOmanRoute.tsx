"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Statistics from "./Statistics"
const AboutOmanRoute = () => {
  const t = useTranslations("AboutOmanRoute")
  return (
     <div className="wrapper">
      <div className="flex flex-col md:flex-row items-center gap-7">

        {/* Text side */}
        <div className="flex flex-col md:w-[70%] w-full space-y-4">  
          <p className="text-base uppercase tracking-widest text-(--color-secondary)">
            {t("subtitle")}                              
          </p>
          <h2 className="text-4xl font-bold text-(--text-heading) leading-tight">
            {t("title")}                                
          </h2>
          <div className="w-12 h-[2px] bg-(--color-primary)" />
          <p className="text-(--color-text)/70 text-lg leading-relaxed max-w-lg">
            {t("description")}
          </p>
            {/* statistics */}
            <div className="max-w-xl mt-3">
            <Statistics />  
            </div>
        </div>
      

        {/* Image side */}
        <div className="w-full flex-1 justify-end">
          <Image
            src="/images/fast-and-easy-transfers.svg"   
            alt="About Oman"
            width={400}                                 
            height={400}
            className="w-full h-auto"
          />
        </div>

      </div>
    </div>
  )
}

export default AboutOmanRoute