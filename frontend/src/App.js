import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Fetch from './Components/Fetch';
import GridPage from './Components/GridPage';
import Navigation from './Components/Navigation';
import CompInfo from './Components/HomePage/AdminInfo/AdminInfo';

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
        <Route path="/admininfo">
          <CompInfo />
        </Route>
      </Switch>
    </>
  );
}

export default App;
