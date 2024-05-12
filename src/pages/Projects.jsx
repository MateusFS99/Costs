import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import AlertText from '../components/atoms/AlertText'
import Container from '../components/templates/Container'
import LinkButton from '../components/atoms/buttons/LinkButton'
import ProjectCard from '../components/organisms/project/ProjectCard'
import Loading from '../components/atoms/Loading'

import styles from './Projects.module.css'

import { getAllProjects, removeProject } from '../services/projectsService'

function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  const location = useLocation()

  if (location.state) {
    setMessage(location.state.message)
  }

  useEffect(() => {
    setTimeout(() => {
      getAllProjects()
        .then((data) => {
          setProjects(data)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }, 2000)
  }, [])

  function onRemove(id) {
    removeProject(id)
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setMessage('Projeto removido com sucesso')
      })
      .catch((err) => console.log(err))
  }

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
            <ProjectCard
              project={project}
              key={project.id}
              handleRemove={onRemove}
            />
          ))}
        {isLoading && <Loading />}
        {!isLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados.</p>
        )}
      </Container>
    </div>
  )
}

export default Projects
