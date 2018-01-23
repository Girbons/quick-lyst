import React from 'react';
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { addTask } from '../actions'

import TaskForm from '../components/Form'


let AddTask = (props) => {
  return <TaskForm onSubmit={props.handleSubmit}/>;
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: value => {
    dispatch(addTask(value.task))
    // reset redux form
    dispatch(reset('task'))
  }
})


AddTask = connect(
  undefined,
  mapDispatchToProps
)(AddTask)


export default AddTask
