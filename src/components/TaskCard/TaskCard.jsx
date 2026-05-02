import { useTask } from '../../context/TaskContext'
import styles from './TaskCard.module.css'

const PRIORITY_LABEL = {
  low: { label: 'Low', color: styles.low },
  medium: { label: 'Medium', color: styles.medium },
  high: { label: 'High', color: styles.high },
}

function TaskCard({ task }) {
  const { completeTask, deleteTask } = useTask()

  return (
    <div className={`${styles.card} ${task.completed ? styles.done : ''}`}>
      <div className={styles.left}>
        <button
          className={`${styles.check} ${task.completed ? styles.checked : ''}`}
          onClick={() => completeTask(task.id)}
          disabled={task.completed}
          aria-label="Complete task"
        >
          {task.completed ? '✓' : ''}
        </button>
        <div>
          <p className={`${styles.title} ${task.completed ? styles.strikethrough : ''}`}>
            {task.title}
          </p>
          <span className={`${styles.badge} ${PRIORITY_LABEL[task.priority]?.color}`}>
            {PRIORITY_LABEL[task.priority]?.label}
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.xp}>+{task.xp} XP</span>
        <button
          className={styles.delete}
          onClick={() => deleteTask(task.id)}
          aria-label="Delete task"
        >
          🗑
        </button>
      </div>
    </div>
  )
}

export default TaskCard
