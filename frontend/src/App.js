import {
  AppBar, createMuiTheme, makeStyles, Paper, ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';
import Navigation from './Components/Navigation';
import SendFile from './Components/test/SendFile';
import UserLoginForm from './Components/user/UserLoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainPaper: {
    margin: 'auto',
    marginTop: theme.spacing(10),
    width: 900,
    padding: theme.spacing(3),
  },
  bodyComponent: {
    position: 'relative',
  },
  breadCrumbs: {
    marginBottom: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const isAuth = useSelector((state) => state.user.auth);
  const themeRedux = useSelector((state) => state.theme);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: themeRedux.primary,
      },
      secondary: {
        main: themeRedux.secondary,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {!isAuth && <UserLoginForm />}
        {isAuth
    && (
    <>
      <AppBar position="fixed">
        <Navigation />
      </AppBar>
      <main>
        <Paper className={classes.mainPaper}>
          <div className={classes.breadCrumbs}>
            <Breadcrumbs className={classes.breadCrumbs} />
          </div>
          <Body className={classes.bodyComponent} />
        </Paper>
      </main>
      <Switch>
        <Route path="/sendfile">
          <SendFile />
        </Route>
      </Switch>
    </>
    )}
      </ThemeProvider>
    </>
  );
}

export default App;
