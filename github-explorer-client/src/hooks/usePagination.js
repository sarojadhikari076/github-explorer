import { useState } from 'react'

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const handleNextPage = () => setCurrentPage((prev) => prev + 1)
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1)

  return {
    currentPage,
    handleNextPage,
    handlePrevPage
  }
}
