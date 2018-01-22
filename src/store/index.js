import { createStore, compose } from 'redux'
import DevTools from '../containers/DevTools'

import rootReducer from '../reducers'


const enhancer = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const store = createStore(rootReducer, enhancer);

export default store;
