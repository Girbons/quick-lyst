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

export const updateCounter = id => {
  return {
    type: 'UPDATE_COUNTER',
    id
  }
}
