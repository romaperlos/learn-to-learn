import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import store from './redux/store';
// import theme from './DefaultTheme';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}

      <Router>
        <App />
      </Router>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
