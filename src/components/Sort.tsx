import * as productTypes from "../types/product";
import * as productStyles from "../styles/products.css";

export const sortProducts = (products: productTypes.Product[], sortBy: productTypes.SortOptionType): productTypes.Product[] => {
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
}

export const Sort = (props: productTypes.SortProps) => {
  const { sortOption, handleSortChange } = props;

  return (
    <form aria-label="Sort products" className={productStyles.sortForm}>
      <label htmlFor="sort" className={productStyles.sortLabel}>
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className={productStyles.sortSelect}
      >
        <option value={productTypes.SORT_OPTIONS.PRICE_ASC}>Price: Low → High</option>
        <option value={productTypes.SORT_OPTIONS.PRICE_DESC}>Price: High → Low</option>
        <option value={productTypes.SORT_OPTIONS.NAME_ASC}>Name: A → Z</option>
        <option value={productTypes.SORT_OPTIONS.NAME_DESC}>Name: Z → A</option>
      </select>
    </form>
  );
};
