import { createMuiTheme } from '@material-ui/core';
import { useSelector } from 'react-redux';

const themeRedux = useSelector((state) => state.theme);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeRedux.main,
    },
    secondary: {
      main: themeRedux.primary,
    },
  },
});

export default theme;
