const initialState = { tasks: [] }

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

    default:
      return state
  }
}

export default tasks;
