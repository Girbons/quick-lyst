import React from 'react'


const Crypto = ({ onClick, value, pending, message }) => (
  <div>
    <button onClick={onClick}>Get Bitcoin Value</button>
    <span>{pending ? message: `${value}$`}</span>
  </div>
)

export { Crypto };
