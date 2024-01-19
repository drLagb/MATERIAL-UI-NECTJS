'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#6d1b7b',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    typography:{
      primary: "#FFFFFF",
      fontFamily: [
                    inter.style.fontFamily,
                    roboto.style.fontFamily,
                    "Arial",
                  ].join(","),
    }
  },
});

theme.typography.h1 = {
  fontSize: '1.7rem',
  '@media (min-width:600px)': {
    fontSize: '2.1rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.7rem',
  },
  "textWrap": "balance",
};

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  "textWrap": "balance",
  "fontWeight": "300"
};

export default theme;
