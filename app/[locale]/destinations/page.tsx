"use client"
import { destinations } from "@/data"
import { usePagination } from "@/hooks/usePagination"
import { AppPagination } from "@/components/Pagination"
import { DestinationsCard } from "@/components/DestinationsCard"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Page = () => {
  const t = useTranslations("DestinationsPage")
  const { currentItems, currentPage, totalPages, goToPage } =
    usePagination(destinations, 12)

  return (
    <div className="">
      <div className=" relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/destinationhero.png"
          alt="Destinations Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4">
          <h1 className="text-4xl  font-bold text-white leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            {t("description")}
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-1 rounded-full bg-(--color-primary)" />
            <div className="w-2 h-1 rounded-full opacity-50 bg-(--color-primary)" />
            <div className="w-1 h-1 rounded-full opacity-25 bg-(--color-primary)" />
          </div>
        </div>
      </div>

      <div className="wrapper py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {currentItems.map((dest) => (
            <DestinationsCard key={dest.id} dest={dest} />
          ))}
        </div>
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </div>
  )
}

export default Page