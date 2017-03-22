// import part of ES6
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// import Main app from components
import App from './components/App';
// import css, handled by webpack
import './styles/base-styles.css';

const routes = (
  <Route path={homeRoute} component={App} />
);

// Render app to root div in index.html
// render is from react-dom above ^^
render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
