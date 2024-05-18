import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Loading from '../../components/atoms/Loading'
import ProjectForm from '../../components/organisms/project/ProjectForm'
import ServiceForm from '../../components/organisms/service/ServiceForm'

import { getProjectById, alterProject } from '../../services/projectsService'

import styles from './Project.module.css'
import Container from '../../components/templates/Container'
import AlertText from '../../components/atoms/AlertText'
import ServiceCard from '../../components/organisms/service/ServiceCard'

function Project() {
  const id = useParams().id
  const [project, setProject] = useState({})
  const [services, setServices] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    setTimeout(() => {
      getProjectById(id)
        .then((data) => {
          setProject(data)
          setServices(data.services)
        })
        .catch((err) => console.log(err))
    }, 2000)
  }, [id])

  function toggleProjectForm() {
    setShowForm(!showForm)
  }

  function alter(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setMessageType('error')
      return
    }
    alterProject(project)
      .then((data) => {
        setProject(data)
        setShowForm(false)
        setMessage('Projeto atualizado!')
        setMessageType('success')
      })
      .catch((err) => console.log(err))
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  function createService() {
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    setMessage('')
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setMessageType('error')
      project.services.pop()
      return
    }

    project.cost = newCost

    alterProject(project)
      .then((data) => {
        setProject(data)
        setServices(data.services)
        setShowServiceForm(false)
        setMessage('Serviço Adicionado!')
        setMessageType('success')
      })
      .catch((err) => console.log(err))
  }

  function onRemoveService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id,
    )
    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    alterProject(project)
      .then((data) => {
        setProject(data)
        setServices(data.services)
        setMessage('Serviço Removido!')
        setMessageType('success')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project}>
          <Container customClass="column">
            {message && messageType && (
              <AlertText type={messageType} msg={message} />
            )}
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
                  <ProjectForm projectData={project} handleSubmit={alter} />
                </div>
              )}
            </div>
            <div className={styles.services}>
              <h2>Adicione um Serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
              </button>
              <div className={styles.projectInfo}>
                {showServiceForm && (
                  <ServiceForm
                    projectData={project}
                    handleSubmit={createService}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    service={service}
                    key={service.id}
                    handleRemove={onRemoveService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
