import {
  AppBar, Container, Grid, makeStyles, Paper,
} from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';
import Navigation from './Components/Navigation';
import SendFile from './Components/test/SendFile';
// import ContentMain from './Components/Content/ContentMain';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainPaper: {
    // position: 'relative',
    margin: 'auto',
    marginTop: theme.spacing(10),
    width: 900,
    padding: theme.spacing(3),
    // height: '100vh',
  },
  bodyComponent: {
    position: 'relative',
    // padding: theme.spacing(1),
  },
  breadCrumbs: {
    marginBottom: theme.spacing(3),
    // display: 'inline-block',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Navigation />
      </AppBar>
      <main>
        <Paper className={classes.mainPaper}>
          <div className={classes.breadCrumbs}>
            <Breadcrumbs className={classes.breadCrumbs} />

          </div>
          {/* <Container fixed>
            <Grid container>
              <Grid item md={6}> */}
          <Body className={classes.bodyComponent} />

          {/* </Grid>
            </Grid>
          </Container> */}
        </Paper>
      </main>
      <Switch>
        <Route path="/testform">
          {/* <Fetch /> */}
        </Route>
        <Route path="/sendfile">
          <SendFile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
