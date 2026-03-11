"use client"
import { destinations } from "@/data"
import { usePagination } from "@/hooks/usePagination"
import { AppPagination } from "@/components/Pagination"
import { DestinationsCard } from "@/components/DestinationsCard"
const page = () => {
    const { currentItems, currentPage, totalPages, goToPage } =
    usePagination(destinations, 12)

  return (
    <div className="wrapper py-20">
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
  )
}

export default page