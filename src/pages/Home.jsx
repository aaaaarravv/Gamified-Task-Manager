import { useTask } from '../context/TaskContext'
import TaskForm from '../components/TaskForm/TaskForm'
import TaskList from '../components/TaskList/TaskList'
import AdviceTip from '../components/AdviceTip/AdviceTip'
import styles from './Home.module.css'

function Home() {
  const { level, xpProgress, stats, earnedBadges } = useTask()

  return (
    <div className={styles.container}>
      {/* XP Bar */}
      <div className={styles.xpBar}>
        <div className={styles.xpInfo}>
          <span>⚡ Level {level}</span>
          <span>{xpProgress} / 50 XP</span>
        </div>
        <div className={styles.barBg}>
          <div className={styles.barFill} style={{ width: `${(xpProgress / 50) * 100}%` }} />
        </div>
      </div>

      {/* Streak & Badges */}
      <div className={styles.meta}>
        <span className={styles.streak}>🔥 {stats.streak} day streak</span>
        {earnedBadges.slice(-3).map((b) => (
          <span key={b.id} className={styles.badge}>{b.label}</span>
        ))}
      </div>

      <AdviceTip />
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Home
