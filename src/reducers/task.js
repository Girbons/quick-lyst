const initialState = { tasks: [], counter: 0}

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
      let tasks = state.tasks.map(task =>
        (task.id === action.id) ? {...task, status: !task.status} : task
      )
      return {
        ...state,
        tasks,
        counter: tasks.reduce((acc, t) => t.status ? acc + 1 : acc, 0)
      };

    default:
      return state
  }
}

export default tasks;
