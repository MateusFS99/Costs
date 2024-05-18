import styles from '../project/ProjectCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ service, handleRemove }) {
  const onEdit = (e) => {
    e.preventDefault()
  }

  const onRemove = (e) => {
    e.preventDefault()
    handleRemove(service.id, service.cost)
  }

  return (
    <div className={styles.projectCard}>
      <h4>{service.name}</h4>
      <p>
        <span>Custo Total:</span> R${service.cost}
      </p>
      <p>{service.description}</p>
      <div className={styles.actions}>
        <button onClick={onEdit}>
          <BsPencil /> Editar
        </button>
        <button onClick={onRemove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
