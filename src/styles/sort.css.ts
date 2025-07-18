import { style } from '@vanilla-extract/css';
import * as tokenStyles from './tokens.css';

export const sortForm = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '1rem 0',
  '@media': {
      [tokenStyles.breakpoints.mobile]: {
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      },
    },
});

export const sortLabel = style({
  fontWeight: 600,
  '@media': {
    [tokenStyles.breakpoints.mobile]: {
      width: '100%',
      fontSize: '1rem',
    },
  }
});

export const sortSelect = style({
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  '@media': {
    [tokenStyles.breakpoints.mobile]: {
      width: '100%',
      height: '3rem',
      fontSize: '1rem',
    },
  }
});
