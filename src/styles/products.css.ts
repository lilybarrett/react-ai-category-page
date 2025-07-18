import { style, styleVariants } from '@vanilla-extract/css';
import * as globalStyles from './globals.css';

export const container = style({
  padding: '1rem',
  maxWidth: '1200px',
  margin: '0 auto',
});

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

export const productCard = style({
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
});

export const productImage = style({
  height: 'auto',
  marginBottom: '0.5rem',
  borderRadius: '4px',
});

export const productName = style({
  fontSize: '1.1rem',
  fontWeight: 600,
  margin: '0.5rem 0',
});

export const productPrice = style({
  color: '#444',
  fontSize: '1rem',
});

export const layoutToggleButton = style([globalStyles.button, {
  marginBottom: '1rem',
}]);

export const sortForm = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '1rem 0',
});

export const sortLabel = style({
  fontWeight: 600,
});

export const sortSelect = style({
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
});

