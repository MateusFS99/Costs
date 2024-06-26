import { useEffect, useState } from 'react'

import Input from '../../molecules/form/Input'
import Select from '../../molecules/form/Select'
import SubmitButton from '../../atoms/buttons/SubmitButton'
import styles from './ProjectForm.module.css'

import { getAllCategories } from '../../../services/categoriesService'

function ProjectForm({ projectData, handleSubmit }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    getAllCategories()
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
