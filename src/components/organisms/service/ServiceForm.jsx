import { useState } from 'react'

import Input from '../../molecules/form/Input'
import SubmitButton from '../../atoms/buttons/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ serviceData, projectData, handleSubmit }) {
  const [service, setService] = useState(serviceData || {})

  const submitForm = (e) => {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <Input
        name="name"
        type="text"
        text="Nome do Serviço"
        placeholder="Insira o nome do serviço"
        value={service.name ? service.name : ''}
        handleOnChange={handleChange}
      />
      <Input
        name="cost"
        type="number"
        text="Custo do Serviço"
        placeholder="Insira o valor total"
        value={service.cost ? service.cost : ''}
        handleOnChange={handleChange}
      />
      <Input
        name="description"
        type="text"
        text="Descrição do Serviço"
        placeholder="Descreva o serviço"
        value={service.description ? service.description : ''}
        handleOnChange={handleChange}
      />
      <SubmitButton text={service.id ? 'Salvar' : 'Adicionar Serviço'} />
    </form>
  )
}

export default ServiceForm
