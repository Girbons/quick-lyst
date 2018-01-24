import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'

import rootReducer from '../reducers'


const enhancer = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const store = createStore(
  rootReducer,
  enhancer,

  applyMiddleware(
    thunk,
    promiseMiddleware()
  )
);

export default store;
