import { Link, useLocation } from 'react-router-dom'
import { useTask } from '../../context/TaskContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { darkMode, setDarkMode, level, stats } = useTask()
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span>🎮</span>
        <span className={styles.title}>TaskQuest</span>
      </div>

      <div className={styles.links}>
        <Link
          to="/"
          className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Tasks
        </Link>
        <Link
          to="/dashboard"
          className={`${styles.link} ${location.pathname === '/dashboard' ? styles.active : ''}`}
        >
          Dashboard
        </Link>
      </div>

      <div className={styles.right}>
        <span className={styles.level}>Lv.{level}</span>
        <span className={styles.xp}>⚡ {stats.xp} XP</span>
        <button
          className={styles.toggle}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
