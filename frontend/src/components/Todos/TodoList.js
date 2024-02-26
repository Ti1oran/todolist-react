import Todo from './Todo'

function TodoList({ todo, deleteTodo }) {
  return (
    <div>
      {!todo.length && <h2 style={{textAlign: 'center'}}>Cписок задач пуст</h2>}
      {todo.map((todo) => {
        return (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        )
      })}
    </div>
  )
}

export default TodoList
