import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ projectId }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <form className={styles.form}>
        <Input
          name="name"
          type="text"
          text="Nome do Projeto"
          placeholder="Insira o nome do projeto"
        />
        <Input
          name="budget"
          type="number"
          text="Orçamento do Projeto"
          placeholder="Insira o orçamento total"
        />
        <Select
          name="category_id"
          text="Selecione a categoria"
          value=""
          options={categories}
        />
      </form>
      <SubmitButton text={projectId ? 'Salvar' : 'Criar Projeto'} />
    </div>
  )
}

export default ProjectForm
