import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Navigation from './Components/Navigation';
import SendFile from './Components/test/SendFile';
// import ContentMain from './Components/Content/ContentMain';

function App() {
  return (
    <>
      <Navigation />
      <Body />
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
