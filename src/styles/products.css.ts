import { style } from '@vanilla-extract/css';
import * as tokenStyles from './tokens.css';

export const container = style({
  padding: '1rem',
  maxWidth: '1200px',
  margin: '0 auto',
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
   '@media': {
    [tokenStyles.breakpoints.mobile]: {
      width: '100%',
    },
  },
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