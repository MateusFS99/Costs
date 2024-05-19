import { useNavigate } from 'react-router-dom'
import { createProject } from '../../../services/projectsService'

import styles from './NewProject.module.css'

import ProjectForm from '../../organisms/project/ProjectForm'

function NewProject() {
  const navigate = useNavigate()

  function create(project) {
    project.cost = 0
    project.services = []

    createProject(project)
      .then((data) => {
        navigate('/projects', { message: 'Projeto criado com sucesso!' })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newProject}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm projectData="" handleSubmit={create} />
    </div>
  )
}

export default NewProject
