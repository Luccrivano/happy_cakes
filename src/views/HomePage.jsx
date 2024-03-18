import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6> El lugar de los mas ricos pasteles </h6>
      <img
        src="https://t3.ftcdn.net/jpg/05/68/12/94/360_F_568129466_B9QOWOhjt6mqbliFOlvW58K8GcMDVNqo.jpg"
        alt="Paltel de fantasia"
      />
    </Container>
  );
};
export default HomePage;
