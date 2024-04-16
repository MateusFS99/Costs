import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  )
}

export default App
