import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ projectData, handleSubmit }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

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

  const submitForm = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <div>
      <form onSubmit={submitForm} className={styles.form}>
        <Input
          name="name"
          type="text"
          text="Nome do Projeto"
          placeholder="Insira o nome do projeto"
          value={project.name ? project.name : ''}
          handleOnChange={handleChange}
        />
        <Input
          name="budget"
          type="number"
          text="Orçamento do Projeto"
          placeholder="Insira o orçamento total"
          value={project.budget ? project.budget : ''}
          handleOnChange={handleChange}
        />
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          value={project.category ? project.category.id : ''}
          handleOnChange={handleCategory}
        />
        <SubmitButton text={project.id ? 'Salvar' : 'Criar Projeto'} />
      </form>
    </div>
  )
}

export default ProjectForm
