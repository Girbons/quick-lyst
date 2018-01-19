import { connect } from 'react-redux';

import { TaskList } from '../components/TaskList';
import { removeTask } from '../actions';


const mapStateToProps = state => {
  return {
    tasks: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(removeTask(id))
    }
  }
}

const VisibleTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);


export default VisibleTasks;
