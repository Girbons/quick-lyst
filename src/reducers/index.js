import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import tasks from '../reducers/task'


const rootReducer = combineReducers({
  form: formReducer,
  data: tasks
})

export default rootReducer;
