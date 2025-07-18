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