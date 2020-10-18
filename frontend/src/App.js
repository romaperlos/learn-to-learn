import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Fetch from './Components/Fetch';
import GridPage from './Components/GridPage';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>

      <Navigation />
      <Body />
      <Switch>
        <Route path="/testform">
          {/* <Fetch /> */}
        </Route>
        <Route path="/grid">
          <GridPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
