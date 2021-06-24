import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import TaskCard from './components/TaskCard'

const App = () => {
  const [todos, setTodos] = useState([])

  const addNewToDo = (todo) => {
    setTodos([...todos, todo])
  }
  // console.log(todos)
  return (
    <>
      <Navbar />
      <Section addNewToDo={addNewToDo} />
      <TaskCard todos={todos} />

    </>
  )
}

export default App
