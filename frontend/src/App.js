import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import Header from './components/Header';

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodo([...todo, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <h1>Список задач</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todo={todo} deleteTodo={deleteTodo} />
        </div>
      </main>
    </div>
  );
}

export default App;
