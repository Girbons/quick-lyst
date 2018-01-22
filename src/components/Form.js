import React from 'react'

import { Field, reduxForm } from 'redux-form'


let TaskForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <label htmlFor="new task">New Task</label>
        <Field name="task" component="input" type="text" />
      </div>
      <button type="submit">Add Task</button>
    </form>
  )
}

TaskForm = reduxForm({
  form: 'task',
})(TaskForm)



export default TaskForm;
