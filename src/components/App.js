import React from 'react'

import AddTask from '../containers/AddTask'
import CryptoContainer from '../containers/CryptoContainer'
import VisibleTasks from '../containers/VisbileTasks'


const App = () => (
  <div>
    <CryptoContainer />
    <AddTask />
    <VisibleTasks />
  </div>
)

export default App;
