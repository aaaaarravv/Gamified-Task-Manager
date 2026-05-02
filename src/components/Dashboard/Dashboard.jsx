import { useTask } from '../../context/TaskContext'
import styles from './Dashboard.module.css'

function Dashboard() {
  const { tasks, stats, earnedBadges, level, xpProgress } = useTask()

  const total = tasks.length
  const completed = tasks.filter((t) => t.completed).length
  const pending = total - completed
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0

  const highDone = tasks.filter((t) => t.priority === 'high' && t.completed).length
  const medDone = tasks.filter((t) => t.priority === 'medium' && t.completed).length
  const lowDone = tasks.filter((t) => t.priority === 'low' && t.completed).length

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📊 Your Dashboard</h2>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{total}</span>
          <span className={styles.statLabel}>Total Tasks</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{completed}</span>
          <span className={styles.statLabel}>Completed</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{pending}</span>
          <span className={styles.statLabel}>Pending</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{stats.xp}</span>
          <span className={styles.statLabel}>Total XP</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{stats.streak}</span>
          <span className={styles.statLabel}>🔥 Streak</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{completionRate}%</span>
          <span className={styles.statLabel}>Completion</span>
        </div>
      </div>

      {/* Level & XP Bar */}
      <div className={styles.section}>
        <h3>Level {level} Progress</h3>
        <div className={styles.barBg}>
          <div className={styles.barFill} style={{ width: `${(xpProgress / 50) * 100}%` }} />
        </div>
        <p className={styles.barLabel}>{xpProgress} / 50 XP to next level</p>
      </div>

      {/* Completion Bar */}
      <div className={styles.section}>
        <h3>Task Completion</h3>
        <div className={styles.barBg}>
          <div className={styles.barFillGreen} style={{ width: `${completionRate}%` }} />
        </div>
        <p className={styles.barLabel}>{completed} of {total} tasks completed</p>
      </div>

      {/* Priority Breakdown */}
      <div className={styles.section}>
        <h3>Completed by Priority</h3>
        <div className={styles.priorityRow}>
          <div className={styles.priorityItem}>
            <span className={styles.dot} style={{ background: '#e74c3c' }} />
            <span>High: {highDone}</span>
          </div>
          <div className={styles.priorityItem}>
            <span className={styles.dot} style={{ background: '#f39c12' }} />
            <span>Medium: {medDone}</span>
          </div>
          <div className={styles.priorityItem}>
            <span className={styles.dot} style={{ background: '#27ae60' }} />
            <span>Low: {lowDone}</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className={styles.section}>
        <h3>🏆 Badges Earned</h3>
        {earnedBadges.length === 0 ? (
          <p className={styles.noBadge}>Complete tasks to earn badges!</p>
        ) : (
          <div className={styles.badges}>
            {earnedBadges.map((b) => (
              <span key={b.id} className={styles.badge}>{b.label}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
