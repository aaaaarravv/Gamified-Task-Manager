import { useState, useEffect } from 'react'
import styles from './AdviceTip.module.css'

function AdviceTip() {
  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function fetchAdvice() {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(`/api/advice?t=${Date.now()}`)
      const data = await res.json()
      setAdvice(data.slip.advice)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>💡 Daily Tip</span>
        <button className={styles.refresh} onClick={fetchAdvice} aria-label="Refresh tip">
          🔄
        </button>
      </div>
      {loading && <p className={styles.text}>Loading...</p>}
      {error && <p className={styles.text}>Could not load tip. Check your connection.</p>}
      {!loading && !error && advice && <p className={styles.text}>"{advice}"</p>}
    </div>
  )
}

export default AdviceTip
