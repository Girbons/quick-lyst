import axios from 'axios';

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

export const bitcoinRequest = () => ({
  type: 'BITCOIN_REQUEST',
  payload: axios.get("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
})
