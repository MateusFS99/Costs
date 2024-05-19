import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import Card from '../../templates/Card'

function ServiceCard({ service, handleRemove }) {
  const onEdit = (e) => {
    e.preventDefault()
  }

  const onRemove = (e) => {
    e.preventDefault()
    handleRemove(service.id, service.cost)
  }

  return (
    <Card
      title={service.name}
      content={
        <>
          <p>
            <span>Custo Total:</span> R${service.cost}
          </p>
          <p>{service.description}</p>
        </>
      }
      actions={
        <>
          <button onClick={onEdit}>
            <BsPencil /> Editar
          </button>
          <button onClick={onRemove}>
            <BsFillTrashFill /> Excluir
          </button>
        </>
      }
    />
  )
}

export default ServiceCard
