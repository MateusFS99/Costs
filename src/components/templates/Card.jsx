import styles from './Card.module.css'

function Card({ title, content, actions }) {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <div className={styles.content}>{content}</div>
      <div className={styles.actions}>{actions}</div>
    </div>
  )
}

export default Card
