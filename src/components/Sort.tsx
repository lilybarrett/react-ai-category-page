import * as productTypes from "../types/product";
import * as productStyles from "../styles/products.css";
import * as globalStyles from "../styles/globals.css";

export const sortProducts = (
  products: productTypes.Product[],
  sortBy: productTypes.SortOptionType
): productTypes.Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case productTypes.SORT_OPTIONS.NAME_ASC:
        return a.name.localeCompare(b.name);
      case productTypes.SORT_OPTIONS.NAME_DESC:
        return b.name.localeCompare(a.name);
      case productTypes.SORT_OPTIONS.PRICE_ASC:
        return a.price - b.price;
      case productTypes.SORT_OPTIONS.PRICE_DESC:
        return b.price - a.price;
      default:
        return 0; // No sorting
    }
  });
};

export const sortOptionLabels: Record<productTypes.SortOptionType, string> = {
  [productTypes.SORT_OPTIONS.NAME_ASC]: "Name: A → Z",
  [productTypes.SORT_OPTIONS.NAME_DESC]: "Name: Z → A",
  [productTypes.SORT_OPTIONS.PRICE_ASC]: "Price: Low → High",
  [productTypes.SORT_OPTIONS.PRICE_DESC]: "Price: High → Low",
};

export const Sort = (props: productTypes.SortProps) => {
  const { sortOption, handleSortChange } = props;

  return (
    <>
      <form aria-label="Sort products" className={productStyles.sortForm}>
        <label htmlFor="sort" className={productStyles.sortLabel}>
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className={productStyles.sortSelect}
          aria-label="Sort products by"
        >
          <option value={productTypes.SORT_OPTIONS.PRICE_ASC}>
            {sortOptionLabels[productTypes.SORT_OPTIONS.PRICE_ASC]}
          </option>
          <option value={productTypes.SORT_OPTIONS.PRICE_DESC}>
            {sortOptionLabels[productTypes.SORT_OPTIONS.PRICE_DESC]}
          </option>
          <option value={productTypes.SORT_OPTIONS.NAME_ASC}>
            {sortOptionLabels[productTypes.SORT_OPTIONS.NAME_ASC]}
          </option>
          <option value={productTypes.SORT_OPTIONS.NAME_DESC}>
            {sortOptionLabels[productTypes.SORT_OPTIONS.NAME_DESC]}
          </option>
        </select>
      </form>
      <div
        aria-live="polite"
        role="status"
        className={globalStyles.visuallyHiddenForAccessibility}
      >
        Sorted by {sortOptionLabels[sortOption]}
      </div>
    </>
  );
};
