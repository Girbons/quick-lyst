let taskId = 0;

export const addTask = text => {
  return {
    type: 'ADD_TASK',
    id: taskId++,
    text
  }
}


export const toggleTask = id => {
  return {
    type: 'TOGGLE_TASK',
    id
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}


export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
