import React from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions'

import TaskForm from '../components/Form'


let AddTask = (props) => {
  return <TaskForm onSubmit={props.handleSubmit}/>;
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: value => dispatch(addTask(value.task))
})


AddTask = connect(
  undefined,
  mapDispatchToProps
)(AddTask)


export default AddTask
