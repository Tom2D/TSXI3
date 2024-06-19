import { alpha, createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';
import { themeShadows } from './shadows.ts';
import { amber, blue, blueGrey, grey, lightBlue, lightGreen, pink, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    positive: PaletteColor;
    negative: PaletteColor;
  }

  interface PaletteOptions {
    positive?: PaletteColorOptions;
    negative?: PaletteColorOptions;
  }
}

const background = '#171a1f';
const bodyBackground = '#111111';

export const appTheme2 = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? alpha(lightBlue['800'], 0.7) : alpha(lightBlue['A100'], 0.7),
        light: isDark ? blue['A400'] : alpha(blue['A100'], 0.2),
      },
      secondary: {
        main: pink['A700'],
      },
      success: {
        main: lightGreen['A700'],
      },
      error: {
        main: red['A400'],
      },
      info: {
        main: lightBlue['A400'],
      },
      warning: {
        main: amber['A700'],
      },
      divider: isDark ? alpha(blueGrey[100], 0.2) : blueGrey[100],
      background: {
        default: isDark ? background : grey[50],
        paper: isDark ? background : grey[50],
      },
      positive: {
        main: isDark ? 'rgb(2,58,2)' : '#bbe4bc',
      },
      negative: {
        main: isDark ? 'rgb(96,13,13)' : '#ffc0c6',
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    typography: {
      fontFamily: [
        'Noto Sans',
        //'"Source Sans Pro"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontSize: '5rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '3.75rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '2.125rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
    },
    shadows: themeShadows,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: isDark ? 'dark' : 'light',
          },
          html: {
            minHeight: '100%',
          },
          body: {
            minHeight: '100%',
            backgroundColor: isDark ? bodyBackground : blueGrey[50],
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            backgroundSize: '100%',
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: false,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: false,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
          contained: {
            // boxShadow: '5px 3px 0px 0 rgba(16, 141, 255, 0.1)',
            // boxShadow: '2px 5px 10px 2px rgba(16, 141, 255, 0.2)'
          },
          sizeSmall: {
            padding: '2px 12px',
          },
          sizeMedium: {
            padding: '6px 18px',
          },
          sizeLarge: {
            padding: '10px 24px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: '0',
            backgroundColor: isDark ? background : grey[50],
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
};
