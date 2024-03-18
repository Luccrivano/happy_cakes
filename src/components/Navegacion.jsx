import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="warning" variant="dark">
      <Navbar.Brand className="ms-5">🍰 Happy Cake</Navbar.Brand>
      <Container className="justify-content-start">
        <div className="d-flex">
          <Link to="/" className="text-dark ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/Contacto" className="text-dark ms-3 text-decoration-none">
            📫 Contacto
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
