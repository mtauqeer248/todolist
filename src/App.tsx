import React from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'
function App() {
 
  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <TodoList taskName={''}/>
    </div>
  )
}

export default App

