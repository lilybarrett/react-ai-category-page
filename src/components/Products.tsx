import products from "../data/products.json";
import * as productTypes from "../types/product";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";
import * as productStyles from "../styles/products.css";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "./Button";
import { Sort, sortProducts } from "./Sort";

export const Products = () => {
  const [layout, setLayout] = useState<productTypes.LayoutType>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<productTypes.SortOptionType>(
    productTypes.SORT_OPTIONS.PRICE_ASC
  );

  // we're using useCallback since
  // toggleLayout is passed to the Button component and we want to avoid unnecessary re-renders
  // by ensuring the function reference remains stable across renders
  const toggleLayout = useCallback(() => {
    setLayout((prev) =>
      prev === productTypes.LAYOUT.GRID
        ? productTypes.LAYOUT.LIST
        : productTypes.LAYOUT.GRID
    );
  }, []);

  const layoutStyles = useMemo(() => {
    return layout === productTypes.LAYOUT.GRID
      ? productStyles.layout.grid
      : productStyles.layout.list;
  }, [layout]);

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as productTypes.SortOptionType;
      setSortOption(value);
      setCurrentPage(1); // Reset to first page when sorting changes
    },
    []
  );

  const PRODUCTS_PER_PAGE = 5;
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = useMemo(() => {
    const sorted = sortProducts(products, sortOption);
    return sorted.slice(start, start + PRODUCTS_PER_PAGE);
  }, [products, sortOption, start]);
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

  // TODO:
  // Use aria-live=polite to announce changes in the product list when sorting or pagination changes
  // Switch between grid and list view automatically depending on screen size
  // Small screens
    // List view should be the default on smaller screens.
    // Where should pagination and list view/sort buttons go on mobile, and how should they be styled?
    // Expand size of product images to fill the width of the screen on small screens

  return (
    <main className={productStyles.container}>
      <section aria-label="Product view and sorting options">
        <Button
          onClick={toggleLayout}
          ariaLabel={`Switch to ${
            layout === productTypes.LAYOUT.GRID ? "list" : "grid"
          } view`}
          aria-pressed={layout === productTypes.LAYOUT.LIST}
        >
          {layout === productTypes.LAYOUT.GRID ? "List View" : "Grid View"}
        </Button>
        <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
      </section>
      <header>
        <h1>Products</h1>
      </header>
      <ul className={layoutStyles} role="list">
        {currentProducts.map((product: productTypes.Product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};
