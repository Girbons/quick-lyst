import { connect } from 'react-redux'

import { TaskList } from '../components/TaskList'
import { toggleTask } from '../actions'


const mapStateToProps = state => {
  return {
    tasks: state.data.tasks,
    counter: state.data.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id));
    }
  }
}

const VisibleTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);


export default VisibleTasks;
