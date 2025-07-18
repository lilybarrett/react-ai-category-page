import * as productTypes from "../types/product";
import * as sortTypes from "../types/sort";
import * as globalStyles from "../styles/globals.css";
import * as sortStyles from "../styles/sort.css";

export const sortProducts = (
  products: productTypes.Product[],
  sortBy: sortTypes.SortOptionType
): productTypes.Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case sortTypes.SORT_OPTIONS.NAME_ASC:
        return a.name.localeCompare(b.name);
      case sortTypes.SORT_OPTIONS.NAME_DESC:
        return b.name.localeCompare(a.name);
      case sortTypes.SORT_OPTIONS.PRICE_ASC:
        return a.price - b.price;
      case sortTypes.SORT_OPTIONS.PRICE_DESC:
        return b.price - a.price;
      default:
        return 0;
    }
  });
};

export const sortOptionLabels: Record<sortTypes.SortOptionType, string> = {
  [sortTypes.SORT_OPTIONS.NAME_ASC]: "Name: A → Z",
  [sortTypes.SORT_OPTIONS.NAME_DESC]: "Name: Z → A",
  [sortTypes.SORT_OPTIONS.PRICE_ASC]: "Price: Low → High",
  [sortTypes.SORT_OPTIONS.PRICE_DESC]: "Price: High → Low",
};

export const Sort = (props: sortTypes.SortProps) => {
  const { sortOption, handleSortChange } = props;

  return (
    <>
      <form aria-label="Sort products" className={sortStyles.sortForm}>
        <label htmlFor="sort" className={sortStyles.sortLabel}>
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className={sortStyles.sortSelect}
          aria-label="Sort products by"
        >
          <option value={sortTypes.SORT_OPTIONS.PRICE_ASC}>
            {sortOptionLabels[sortTypes.SORT_OPTIONS.PRICE_ASC]}
          </option>
          <option value={sortTypes.SORT_OPTIONS.PRICE_DESC}>
            {sortOptionLabels[sortTypes.SORT_OPTIONS.PRICE_DESC]}
          </option>
          <option value={sortTypes.SORT_OPTIONS.NAME_ASC}>
            {sortOptionLabels[sortTypes.SORT_OPTIONS.NAME_ASC]}
          </option>
          <option value={sortTypes.SORT_OPTIONS.NAME_DESC}>
            {sortOptionLabels[sortTypes.SORT_OPTIONS.NAME_DESC]}
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
