import { Button } from "./Button";
import * as productTypes from "../types/product";
import * as globalStyles from "../styles/globals.css";

export const LayoutToggle = ({ toggleLayout, layout }: productTypes.LayoutToggleProps) => {
  return (
    <>
      <Button
        onClick={toggleLayout}
        ariaLabel={`Switch to ${
          layout === productTypes.LAYOUT.GRID ? "list" : "grid"
        } view`}
        aria-pressed={layout === productTypes.LAYOUT.LIST}
      >
        {layout === productTypes.LAYOUT.GRID ? "Grid View" : "List View"}
      </Button>
      <div
        aria-live="polite"
        role="status"
        className={globalStyles.visuallyHiddenForAccessibility}
      >
        Viewing products in a{" "}
        {layout === productTypes.LAYOUT.GRID ? "grid" : "list"} view`
      </div>
    </>
  );
};
