import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "0.5rem 1rem",
  background: "#f2f2f2",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 600,

  selectors: {
    "&:focus-visible": {
      outline: "2px solid blue",
      outlineOffset: "2px",
    },
    // fallback for browsers that don't support focus-visible
    // this will apply a focus style to all buttons, which is not ideal
    // but ensures accessibility
    "&:focus": {
      outline: "2px solid blue",
      outlineOffset: "2px",
    },
  },
});

export const visuallyHiddenForAccessibility = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
});
