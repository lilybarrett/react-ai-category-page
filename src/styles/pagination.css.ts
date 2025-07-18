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
  selectors: {
    '&[aria-current="page"]': {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
}]);

export const mobilePaginationStatus = style({
  fontSize: '1rem',
  textAlign: "center",
  margin: "auto",
  display: "block",
  '@media': {
    'screen and (min-width: 600px)': {
      display: "none",
    },
  },
});