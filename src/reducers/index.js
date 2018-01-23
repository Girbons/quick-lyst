import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import tasks from '../reducers/task'
import counter from '../reducers/counter'


const rootReducer = combineReducers({
  counter,
  data: tasks,
  form: formReducer
})

export default rootReducer;
