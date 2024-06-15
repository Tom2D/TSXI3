import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          /*
          primary: grey,
          divider: grey[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          */
        }
      : {
          // palette values for dark mode
          /*
          primary: purple,
          divider: grey[800],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
          */
        }),
  },
});
