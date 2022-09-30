import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark:'#9B9B9B'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        padding: 2,
        color: 'white',
      },
    },
  }
});