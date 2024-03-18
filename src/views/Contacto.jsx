import { Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Cuéntanos, ¿Cuál es tu pastel favorito?</h1>
      <Form className="mt-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.cl" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu correo con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe aquí tu descripción..."
          />
        </Form.Group>

        <Button className="mt-3" variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
