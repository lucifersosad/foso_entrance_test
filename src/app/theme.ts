'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    neutral: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#025FCA',
      light: '#3384FF',
      dark: '#0047B3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6B00',
      light: '#FF8533',
      dark: '#CC5500',
      contrastText: '#FFFFFF',
    },
    neutral: {
      main: '#64748B',
      light: '#F5F5F5',
      dark: '#1F2937',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B',
      light: '#FCD34D',
      dark: '#B45309',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#1F2937',
      secondary: '#64748B',
      disabled: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: 'var(--font-epilogue)',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       root: {
  //         '@media (min-width: 1440px)': {
  //           maxWidth: '1440px',
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
