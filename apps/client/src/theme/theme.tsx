import { createTheme } from '@mui/material';
//import { grey, purple } from '@mui/material/colors';

export const appTheme1 = (mode: 'light' | 'dark') => {
  return createTheme({
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
            /*
  // palette values for dark mode
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
};
