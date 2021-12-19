import React from 'react';
import { ThemeProvider } from 'react-jss';

export const thema = {
  palette: {
    common: {
      white: '#fff',
    },
    text: {
      primary: '#273b61',
    },
    background: {
      light: '#d5edfe',
      secondary: '#3b6d9a',
    },
  },
  gradients: {
    light: '0 8px 32px rgb(39 59 97 / 8%)',
    dark: '0px 2px 2px rgba(0, 8, 29, 0.05), 0px 0px 2px rgba(0, 8, 29, 0.06), 0px 1px 3px rgba(0, 8, 29, 0.08)',
  },
};

export type ThemaType = typeof thema;

export const Thema: React.FC = ({ children }) => {
  return <ThemeProvider theme={thema}>{children}</ThemeProvider>;
};
