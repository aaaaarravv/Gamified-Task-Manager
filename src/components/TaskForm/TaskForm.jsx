import { useState } from 'react'
import { useTask } from '../../context/TaskContext'
import styles from './TaskForm.module.css'

function TaskForm() {
  const { addTask } = useTask()
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) {
      setError('Task title cannot be empty.')
      return
    }
    addTask({ title: title.trim(), priority })
    setTitle('')
    setPriority('medium')
    setError('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={styles.select}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">🟢 Low (10 XP)</option>
          <option value="medium">🟡 Medium (20 XP)</option>
          <option value="high">🔴 High (30 XP)</option>
        </select>
        <button className={styles.btn} type="submit">
          + Add Task
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default TaskForm
