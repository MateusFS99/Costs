import { useLocation } from 'react-router-dom'

import AlertText from '../components/atoms/AlertText'

function Projects() {
  const location = useLocation()
  let message = ''
  
  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <AlertText type="success" msg={message} />}
    </div>
  )
}

export default Projects
