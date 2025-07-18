export const LAYOUT = {
  GRID: "grid",
  LIST: "list",
} as const;

export type LayoutType = (typeof LAYOUT)[keyof typeof LAYOUT];

export interface LayoutToggleProps {
  toggleLayout: () => void;
  layout: LayoutType;
}