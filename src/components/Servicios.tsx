import { motion } from "framer-motion";
import { useState } from "react";
import FlipCard from "../components/FlipCard";
import diseno from "../assets/image/flager_mirame.jpg";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Servicios() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const servicios = [
    {
      title: "Diseño Gráfico",
      desc: "Branding, logotipos, piezas publicitarias y más.",
      price: "Desde S/120",
      img: diseno,
    },
    {
      title: "Fotografía de Eventos",
      desc: "Bodas, cumpleaños, corporativos y especiales.",
      price: "Desde S/300",
      img: "/src/assets/image/eventos_ginger.jpg",
    },
    {
      title: "Retratos Profesionales",
      desc: "Sesiones de estudio y exteriores.",
      price: "Desde S/150",
      img: "/src/assets/image/DSC09334.jpg",
    },
    {
      title: "Fotografía de Producto",
      desc: "Fotos de alta calidad para ecommerce y catálogos.",
      price: "Desde S/200",
      img: "/src/assets/image/",
    },
    {
      title: "Fotografía de Producto",
      desc: "Fotos de alta calidad para ecommerce y catálogos.",
      price: "Desde S/200",
      img: "/src/assets/image/",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-black via-[#111827] to-black text-white"
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* CONTENEDOR CENTRAL */}
      <div className="w-[95%] max-w-7xl mx-auto px-6 text-center">
        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-hurmeBlack mb-16 text-mostaza-5">
          Nuestros Servicios
        </h2>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-10">
          {servicios.map((item, index) => (
            <FlipCard
              key={index}
              item={item}
              index={index}
              flippedIndex={flippedIndex}
              setFlippedIndex={setFlippedIndex}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Servicios;
