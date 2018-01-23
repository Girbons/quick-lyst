import React from 'react'

import { Task } from './Task'


const TaskList = ({ tasks, counter, onTaskCheck, onTaskUncheck }) => (
  <div>
    <div>Completed Tasks: {counter}</div>
    <div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} {...task} onClick={() => (task.status ? onTaskUncheck(task.id) : onTaskCheck(task.id))} />
        ))}
      </ul>
    </div>
  </div>
)


export { TaskList };
