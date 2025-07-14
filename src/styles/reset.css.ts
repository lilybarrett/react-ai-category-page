import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  height: '100%',
  fontFamily: 'system-ui, sans-serif',
  backgroundColor: '#fff',
  color: '#000',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  fontFamily: 'inherit',
});