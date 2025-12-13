// import { useState } from "react";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Colaborador from "./components/Colaboradores";
import BotonWasa from "./components/BotonWasa";

function App() {
  return (
    <>
      <Hero />
      <Servicios />
      <Colaborador />
      <Galeria />
      <Testimonios />
      <Contacto />
      <BotonWasa />
      <Footer />
    </>
  );
}

export default App;
