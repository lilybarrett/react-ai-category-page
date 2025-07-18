import { style, styleVariants } from '@vanilla-extract/css';
import * as globalStyles from './globals.css';
import * as tokenStyles from './tokens.css';

export const layout = styleVariants({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    listStyle: 'none',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    listStyle: 'none',
  },
});


export const layoutToggleButton = style([globalStyles.button, {
  marginBottom: '1rem',
  '@media': {
    [tokenStyles.breakpoints.mobile]: {
      display: 'none',
    },
  },
}]);
