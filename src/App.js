import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodo([...todo, newTodo])
  }
  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }
  return (
    <div className="App">
      <h1>Мой список задач на React</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todo={todo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
