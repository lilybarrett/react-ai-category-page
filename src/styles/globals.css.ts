import { style } from '@vanilla-extract/css';

export const button = style({
  padding: "0.5rem 1rem",
  background: "#f2f2f2",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 600,

  selectors: {
    '&[aria-current="page"]': {
      backgroundColor: "#000",
      color: "#fff",
    },
    "&:focus-visible": {
      outline: "2px solid blue",
      outlineOffset: "2px",
    },
  },
});
