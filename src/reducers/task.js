const tasks = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state, {
          id: action.id,
          text: action.text,
          status: false
        }
      ]

    case 'REMOVE_TASK':
      return state.map(task =>
        (task.id === action.id) ? {...task, status: !task.status} : task
      )

    default:
      return state
  }
}

export default tasks;
