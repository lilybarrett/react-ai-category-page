import type { PaginationProps } from "../types/pagination";
import * as paginationStyles from "../styles/pagination.css";
import { Button } from "./Button";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Pagination controls" className={paginationStyles.paginationNav}>
      <ul className={paginationStyles.paginationList}>
        <li>
          <Button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            ariaLabel="Go to previous page"
          >
            Previous
          </Button>
        </li>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <Button
                type="button"
                onClick={() => handlePageChange(page)}
                ariaLabel={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            ariaLabel="Go to next page"
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
