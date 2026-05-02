import { createContext, useContext, useState, useEffect } from 'react'

const TaskContext = createContext()

const BADGES = [
  { id: 'first', label: '🏅 First Task', condition: (stats) => stats.completed >= 1 },
  { id: 'five', label: '⭐ 5 Tasks Done', condition: (stats) => stats.completed >= 5 },
  { id: 'ten', label: '🔥 10 Tasks Done', condition: (stats) => stats.completed >= 10 },
  { id: 'streak3', label: '📅 3-Day Streak', condition: (stats) => stats.streak >= 3 },
  { id: 'xp100', label: '💎 100 XP', condition: (stats) => stats.xp >= 100 },
]

const XP_MAP = { low: 10, medium: 20, high: 30 }

function getLevel(xp) {
  return Math.floor(xp / 50) + 1
}

function getXPProgress(xp) {
  return xp % 50
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('gtm-tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('gtm-stats')
    return saved ? JSON.parse(saved) : { xp: 0, completed: 0, streak: 0, lastCompletedDate: null }
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('gtm-dark') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('gtm-tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('gtm-stats', JSON.stringify(stats))
  }, [stats])

  useEffect(() => {
    localStorage.setItem('gtm-dark', darkMode)
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function addTask(task) {
    const newTask = {
      id: Date.now(),
      title: task.title,
      priority: task.priority || 'medium',
      completed: false,
      createdAt: new Date().toISOString(),
      xp: XP_MAP[task.priority || 'medium'],
    }
    setTasks((prev) => [newTask, ...prev])
  }

  function completeTask(id) {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id && !t.completed) {
          const today = new Date().toDateString()
          setStats((s) => {
            const isConsecutive = s.lastCompletedDate === new Date(Date.now() - 86400000).toDateString()
            return {
              xp: s.xp + t.xp,
              completed: s.completed + 1,
              streak: isConsecutive ? s.streak + 1 : 1,
              lastCompletedDate: today,
            }
          })
          return { ...t, completed: true }
        }
        return t
      })
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const earnedBadges = BADGES.filter((b) => b.condition(stats))
  const level = getLevel(stats.xp)
  const xpProgress = getXPProgress(stats.xp)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        stats,
        darkMode,
        setDarkMode,
        addTask,
        completeTask,
        deleteTask,
        earnedBadges,
        level,
        xpProgress,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext)
}
