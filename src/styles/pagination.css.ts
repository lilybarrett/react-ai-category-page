import { style } from "@vanilla-extract/css";
import * as globalStyles from "./globals.css";

export const paginationNav = style({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  maxWidth: '1200px',
  margin: '0 auto',
});

export const paginationList = style({
  listStyle: "none",
  display: "flex",
  gap: "0.5rem",
  padding: 0,
});

export const pageButton = style([globalStyles.button, {
  // padding: "0.5rem 1rem",
  // background: "#f2f2f2",
  // border: "1px solid #ccc",
  // borderRadius: "4px",
  // cursor: "pointer",
  // fontWeight: 600,

  selectors: {
    '&[aria-current="page"]': {
      backgroundColor: "#000",
      color: "#fff",
    },
    // "&:focus-visible": {
    //   outline: "2px solid blue",
    //   outlineOffset: "2px",
    // },
  },
}]);