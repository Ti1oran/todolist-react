import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const sendForm = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={sendForm}>
        <input
          type="text"
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default TodoForm
