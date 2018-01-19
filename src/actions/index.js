let taskId = 0;


export const addTask = text => {
  return {
    type: 'ADD_TASK',
    id: taskId++,
    text
  }
}


export const removeTask = id => {
  return {
    type: 'REMOVE_TASK',
    id
  }
}
