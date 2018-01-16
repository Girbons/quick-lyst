import React from 'react';

import { Task } from './Task';



const TaskList = ({ tasks, onClickRemove, onClickChangeStatus }) => {


  const taskItems = tasks.map(task =>
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      status={task.status}
      onClickRemove={onClickRemove}
      onClickChangeStatus={onClickChangeStatus}
    />
  );
  return <ul>{taskItems}</ul>
}


export { TaskList };
