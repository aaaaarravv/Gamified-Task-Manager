import { useState, useMemo } from 'react'
import { useTask } from '../../context/TaskContext'
import TaskCard from '../TaskCard/TaskCard'
import styles from './TaskList.module.css'

function TaskList() {
  const { tasks } = useTask()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('newest')

  const filtered = useMemo(() => {
    let result = [...tasks]

    // Search
    if (search.trim()) {
      result = result.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Filter
    if (filter === 'completed') result = result.filter((t) => t.completed)
    if (filter === 'pending') result = result.filter((t) => !t.completed)
    if (filter === 'high') result = result.filter((t) => t.priority === 'high')
    if (filter === 'medium') result = result.filter((t) => t.priority === 'medium')
    if (filter === 'low') result = result.filter((t) => t.priority === 'low')

    // Sort
    if (sort === 'newest') result.sort((a, b) => b.id - a.id)
    if (sort === 'oldest') result.sort((a, b) => a.id - b.id)
    if (sort === 'xp-high') result.sort((a, b) => b.xp - a.xp)
    if (sort === 'xp-low') result.sort((a, b) => a.xp - b.xp)

    return result
  }, [tasks, search, filter, sort])

  return (
    <div>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={styles.select}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <select
          className={styles.select}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="xp-high">XP: High to Low</option>
          <option value="xp-low">XP: Low to High</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          {tasks.length === 0 ? 'No tasks yet. Add one above!' : 'No tasks match your search.'}
        </div>
      ) : (
        filtered.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  )
}

export default TaskList
