import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Fetch from './Components/Fetch';
import GridPage from './Components/GridPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/testform">
          <Fetch />
        </Route>
        <Route pathe="/grid">
          <GridPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
