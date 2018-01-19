import { connect } from 'react-redux';

import { TaskList } from '../components/TaskList';
import { toggleTask } from '../actions';


const mapStateToProps = state => {
  return {
    tasks: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
    }
  }
}

const VisibleTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);


export default VisibleTasks;
