import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import AlertText from '../components/atoms/AlertText'
import Container from '../components/templates/Container'
import LinkButton from '../components/atoms/buttons/LinkButton'
import ProjectCard from '../components/organisms/project/ProjectCard'

import styles from './Projects.module.css'

import { getAllProjects } from '../services/projectsService'

function Projects() {
  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state.message
  }

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getAllProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <AlertText type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </Container>
    </div>
  )
}

export default Projects
