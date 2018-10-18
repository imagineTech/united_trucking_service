import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './Screens/Root';

import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));
