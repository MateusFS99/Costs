import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../../components/atoms/Loading'
import ProjectForm from '../../components/organisms/project/ProjectForm'

import { getProjectById } from '../../services/projectsService'

import styles from './Project.module.css'
import Container from '../../components/templates/Container'

function Project() {
  const id = useParams().id
  const [project, setProject] = useState({})
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      getProjectById(id)
        .then((data) => {
          setProject(data)
        })
        .catch((err) => console.log(err))
    }, 2000)
  }, [id])

  function toggleProjectForm() {
    setShowForm(!showForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project}>
          <Container customClass="column">
            <div className={styles.datails}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showForm ? 'Editar Projeto' : 'Fechar'}
              </button>
              {!showForm ? (
                <div className={styles.projectInfo}>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total do Orçamento: </span>
                    R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span>
                    R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projectInfo}>
                  <p>Project Form</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
