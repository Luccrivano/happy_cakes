import { Route, Routes } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import Contacto from "./views/Contacto";

const App = () => {
  return (
    <div>
      <Navegacion />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
