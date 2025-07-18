export interface PaginationProps {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
  goToPreviousPage: () => void,
  goToNextPage: () => void,
}