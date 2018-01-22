const initialState = { tasks: [], completedTasks: 0}

const tasks = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      let newTask = {
        id: action.id,
        text: action.text,
        status: false
      }
      return { ...state, tasks: state.tasks.concat(newTask)}

    case 'TOGGLE_TASK':
      return {...state, tasks: state.tasks.map(task =>
        (task.id === action.id) ? {...task, status: !task.status} : task
      )}

    case 'UPDATE_COUNTER':
      let counter = state.completedTasks;
      for (let i=0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === action.id) {
          if (state.tasks[i].status) {
            counter++;
          }
          else {
            counter--;
          }
        }
      }
      return {...state, completedTasks: counter }

    default:
      return state
  }
}

export default tasks;
