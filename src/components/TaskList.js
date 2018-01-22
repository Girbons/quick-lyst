import React from 'react'

import { Task } from './Task'


const TaskList = ({ tasks, counter, onTaskClick }) => (
  <div>
    <div>Completed Tasks: {counter}</div>
    <div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} {...task} onClick={() => onTaskClick(task.id)} />
        ))}
      </ul>
    </div>
  </div>
)


export { TaskList };
