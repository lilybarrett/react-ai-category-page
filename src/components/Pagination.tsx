import type { PaginationProps } from "../types/pagination";
import * as paginationStyles from "../styles/pagination.css";
import { Button } from "./Button";
import { useIsMobile } from "../hooks/useIsMobile";
import * as tokenStyles from "../styles/tokens.css";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  goToPreviousPage,
  goToNextPage,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const isMobileView = useIsMobile(tokenStyles.breakpoints.mobile);

  return (
    <>
      <nav
        aria-label="Pagination controls"
        className={paginationStyles.paginationNav}
      >
        <ul className={paginationStyles.paginationList}>
          <li>
            <Button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              ariaLabel="Go to previous page"
            >
              Previous
            </Button>
          </li>
          {!isMobileView &&
            [...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <li key={page}>
                  <Button
                    type="button"
                    onClick={() => handlePageChange(page)}
                    ariaLabel={`Go to page ${page}`}
                    className={paginationStyles.pageButton}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </Button>
                </li>
              );
            })}
          <li>
            <Button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              ariaLabel="Go to next page"
            >
              Next
            </Button>
          </li>
        </ul>
      </nav>
      {isMobileView && (
        <p
          id="pagination-status"
          aria-live="polite"
          className={paginationStyles.mobilePaginationStatus}
        >
          Page {currentPage} of {totalPages}
        </p>
      )}
    </>
  );
};
