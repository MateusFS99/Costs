import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/templates/Container'
import Navbar from './components/templates/Navbar'
import Footer from './components/templates/Footer'

import Home from './pages/home/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/projects/NewProject'
import Projects from './pages/projects/Projects'
import Project from './pages/projects/Project'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
