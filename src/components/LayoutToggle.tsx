import { Button } from "./Button";
import * as layoutTypes from "../types/layout";
import * as globalStyles from "../styles/globals.css";
import * as layoutStyles from "../styles/layout.css";

export const LayoutToggle = ({ toggleLayout, layout }: layoutTypes.LayoutToggleProps) => {
  return (
    <>
      <Button
        onClick={toggleLayout}
        ariaLabel={`Switch to ${
          layout === layoutTypes.LAYOUT.GRID ? "list" : "grid"
        } view`}
        aria-pressed={layout === layoutTypes.LAYOUT.LIST}
        className={layoutStyles.layoutToggleButton}
      >
        {layout === layoutTypes.LAYOUT.GRID ? "Grid View" : "List View"}
      </Button>
      <div
        aria-live="polite"
        role="status"
        className={globalStyles.visuallyHiddenForAccessibility}
      >
        Viewing products in a{" "}
        {layout === layoutTypes.LAYOUT.GRID ? "grid" : "list"} view`
      </div>
    </>
  );
};
