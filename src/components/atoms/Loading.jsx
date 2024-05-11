import loading from '../../images/loading.svg'

import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.loader}>
      <img src={loading} alt="Loading" />
    </div>
  )
}

export default Loading
