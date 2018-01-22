import React from 'react'


const Task = ({ onClick, status, text }) => (
  <li onClick={onClick}
    style={{
      textDecoration: status ? 'line-through' : 'none'
    }}
    >
    {text}
  </li>
)


export { Task };
