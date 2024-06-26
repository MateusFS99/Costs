import { useState, useEffect } from 'react'

import styles from './AlertText.module.css'

function AlertText({ type, msg }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.alertText} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default AlertText
