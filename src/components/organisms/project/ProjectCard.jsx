import styles from './ProjectCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ project, handleRemove }) {
  return (
    <div className={styles.projectCard}>
      <h4>{project.name}</h4>
      <p>
        <span>Orçamento:</span> R${project.budget}
      </p>
      <p className={styles.categoryText}>
        <span
          className={`${styles[project.category.name.toLowerCase()]}`}
        ></span>{' '}
        {project.category.name}
      </p>
      <div className={styles.actions}>
        <button>
          <BsPencil /> Editar
        </button>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
