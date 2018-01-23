import { connect } from 'react-redux'

import { TaskList } from '../components/TaskList'
import { toggleTask, increment, decrement } from '../actions'


const mapStateToProps = state => {
  return {
    tasks: state.data.tasks,
    counter: state.counter.counter
  }
}

const mapDispatchToProps = dispatch => ({
  onTaskCheck: id => {
    dispatch(increment());
    dispatch(toggleTask(id));
  },

  onTaskUncheck: id => {
    dispatch(toggleTask(id));
    dispatch(decrement());
  }
})

const VisibleTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);


export default VisibleTasks;
