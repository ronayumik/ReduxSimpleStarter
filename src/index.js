import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import requireAuth from './components/require_authentication';
import reducers from './reducers';
import Resources from './components/resources';
import { Router, Route, browserHistory } from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} >
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
