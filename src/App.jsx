import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </ul>

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
  );
}

export default App;