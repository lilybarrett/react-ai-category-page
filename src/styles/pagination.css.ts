import { style } from "@vanilla-extract/css";

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