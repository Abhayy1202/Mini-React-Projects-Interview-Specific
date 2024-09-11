import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

useEffect(() => {
  
axios.get("https://dummyjson.com/todos?limit=10&skip=80 ")
  .then((response) => {
    // console.log(response.data.todos);
    
    setTodos(response.data.todos);
  })
  .catch((error) => console.log("ERR:", error));

}, [])

  return (
    <>
      <div>
        {todos.map((todo) => {
          return(
          <div key={todo.id}>
            <div>Title:{todo.userId}</div>
            <div>Todo:{todo.todo}</div>
            <div>completed:{todo.completed}</div>
            <br />
          </div>)
        })}
      </div>
    </>
  );}

export default App

