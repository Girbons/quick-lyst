import { connect } from 'react-redux'

import { TaskList } from '../components/TaskList'
import { toggleTask, updateCounter } from '../actions'


const mapStateToProps = state => {
  return {
    tasks: state.data.tasks,
    counter: state.data.completedTasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
      dispatch(updateCounter(id))
    }
  }
}

const VisibleTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);


export default VisibleTasks;
