import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import bitcoin from '../reducers/bitcoin'
import counter from '../reducers/counter'
import tasks from '../reducers/task'


const rootReducer = combineReducers({
  bitcoin,
  counter,
  data: tasks,
  form: formReducer
})

export default rootReducer;
