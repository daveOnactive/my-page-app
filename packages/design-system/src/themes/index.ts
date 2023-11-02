import { createTheme } from '@mui/material';
import { colorPalette } from './palette';

export const theme = createTheme({
  palette: {
    mode: 'light',
    ...colorPalette
  },
  typography: {
    button: {
      fontSize: '.8rem'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    }
  }
})