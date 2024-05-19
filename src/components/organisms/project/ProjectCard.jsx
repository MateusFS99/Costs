import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import Card from '../../templates/Card'

function ProjectCard({ project, handleRemove }) {
  const onRemove = (e) => {
    e.preventDefault()
    handleRemove(project.id)
  }

  return (
    <Card
      title={project.name}
      content={
        <>
          <p>
            <span>Orçamento:</span> R${project.budget}
          </p>
          <p>
            <span>Categoria:</span> {project.category.name}
          </p>
        </>
      }
      actions={
        <>
          <Link to={`/project/${project.id}`}>
            <BsPencil /> Editar
          </Link>
          <button onClick={onRemove}>
            <BsFillTrashFill /> Excluir
          </button>
        </>
      }
    />
  )
}

export default ProjectCard
