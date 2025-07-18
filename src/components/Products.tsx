import products from "../data/products.json";
import * as productTypes from "../types/product";
import * as layoutTypes from "../types/layout";
import * as sortTypes from "../types/sort";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";
import * as productStyles from "../styles/products.css";
import * as tokenStyles from "../styles/tokens.css";
import * as layoutStyles from "../styles/layout.css";
import {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import { Sort, sortProducts } from "./Sort";
import { LayoutToggle } from "./LayoutToggle";
import { useIsMobile } from "../hooks/useIsMobile";

export const Products = () => {
  const [layout, setLayout] = useState<layoutTypes.LayoutType>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<sortTypes.SortOptionType>(
    sortTypes.SORT_OPTIONS.PRICE_ASC
  );
  const isMobileView = useIsMobile(tokenStyles.breakpoints.mobile);

  useLayoutEffect(() => {
    const showListLayoutByDefault = isMobileView;
    if (showListLayoutByDefault) {
      setLayout(layoutTypes.LAYOUT.LIST);
    } else {
      setLayout(layoutTypes.LAYOUT.GRID);
    }
  }, []);

  const PRODUCTS_PER_PAGE = 5;
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = useMemo(() => {
    const sorted = sortProducts(products, sortOption);
    return sorted.slice(start, start + PRODUCTS_PER_PAGE);
  }, [products, sortOption, start]);

  // we're using useCallback since
  // toggleLayout is passed to the Button component and we want to avoid unnecessary re-renders
  // by ensuring the function reference remains stable across renders
  const toggleLayout = useCallback(() => {
    setLayout((prev) =>
      prev === layoutTypes.LAYOUT.GRID
        ? layoutTypes.LAYOUT.LIST
        : layoutTypes.LAYOUT.GRID
    );
  }, []);

  const layoutView = useMemo(() => {
    return layout === layoutTypes.LAYOUT.GRID
      ? layoutStyles.layout.grid
      : layoutStyles.layout.list
  }, [layout]);

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as sortTypes.SortOptionType;
      setSortOption(value);
      setCurrentPage(1); // Reset to first page when sorting changes
    },
    []
  );

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);
  // Note: We don't technically need to memoize products here since it's hardcoded
  // but it's best practice to do so in case we later fetch products from an API

  // If we were retrieving products from an API, we'd also want to handle the following:
  // - Error handling (e.g., what if the API is down?)
  // - Loading state (e.g., show a spinner while products are being fetched)
  // - Fetching only a subset of products at a time in the pagination component
  // - Caching (e.g., storing products in local storage or a global state management solution

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <main className={productStyles.container}>
      <section aria-label="Product view and sorting options">
        <LayoutToggle toggleLayout={toggleLayout} layout={layout} />
        {isMobileView && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        )}
        <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
      </section>
      <section>
        <header>
          <h1>Products</h1>
        </header>
        <ul
          className={layoutView}
          role="list"
          aria-label="A list of products"
        >
          {currentProducts.map((product: productTypes.Product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </section>
      {!isMobileView && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )}
    </main>
  );
};
