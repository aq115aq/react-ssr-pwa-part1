import * as React from 'react';
import * as ReactDOM from 'react-dom';

// router
import {BrowserRouter as Router} from 'react-router-dom';
import getRoutes from './routes';

// redux
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux';
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore) // 使用redux-thunk中间件
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);