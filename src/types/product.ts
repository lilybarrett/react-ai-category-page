export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const LAYOUT = {
  GRID: "grid",
  LIST: "list",
} as const;
export type LayoutType = (typeof LAYOUT)[keyof typeof LAYOUT];

export const SORT_OPTIONS = {
  NAME_ASC: "name_asc",
  NAME_DESC: "name_desc",
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
} as const;
export type SortOptionType = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
export interface SortProps {
  sortOption: SortOptionType;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}