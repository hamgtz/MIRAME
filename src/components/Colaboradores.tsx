import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import logoCliente1 from "../assets/image/Logos/logos pagina-01.png";
import logoCliente2 from "../assets/image/Logos/logos pagina-02.png";
import logoCliente3 from "../assets/image/Logos/logos pagina-03.png";
import logoCliente4 from "../assets/image/Logos/logos pagina-04.png";
import logoCliente5 from "../assets/image/Logos/logos pagina-05.png";
import logoCliente6 from "../assets/image/Logos/logos pagina-06.png";
import logoCliente7 from "../assets/image/Logos/logos pagina-07.png";
import logoCliente8 from "../assets/image/Logos/logos pagina-08.png";
import logoCliente9 from "../assets/image/Logos/logos pagina-09.png";
import logoCliente10 from "../assets/image/Logos/logos pagina-10.png";
import logoCliente11 from "../assets/image/Logos/logos pagina-11.png";
import logoCliente12 from "../assets/image/Logos/loog atahualpa.png";
import logoCliente13 from "../assets/image/Logos/perfil goku.png";

const imagenes = [
  { src: logoCliente1, nombre: "" },
  { src: logoCliente2, nombre: "" },
  { src: logoCliente3, nombre: "" },
  { src: logoCliente4, nombre: "" },
  { src: logoCliente5, nombre: "" },
  { src: logoCliente6, nombre: "" },
  { src: logoCliente7, nombre: "" },
  { src: logoCliente8, nombre: "" },
  { src: logoCliente9, nombre: "" },
  { src: logoCliente10, nombre: "" },
  { src: logoCliente11, nombre: "" },
  { src: logoCliente12, nombre: "" },
  { src: logoCliente13, nombre: "" },
];

const Resena = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-[#263447] to-[#010715] overflow-hidden">
      {/* CONTENEDOR CENTRAL */}
      <div className="w-[95%] max-w-7xl mx-auto px-6 text-center">
        {/* TÍTULO */}
        <motion.h2
          ref={ref}
          className="text-2xl md:text-3xl font-bold mb-6 text-mostaza-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Marcas con las que trabajamos
        </motion.h2>

        {/* LÍNEA */}
        <motion.div
          className="h-1 w-24 bg-mostaza-5 mx-auto mb-12 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* CARRUSEL INFINITO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="flex w-max animate-[scroll_90s_linear_infinite] 
                   hover:[animation-play-state:paused]"
        style={{ willChange: "transform" }}
      >
        {Array(2)
          .fill(imagenes)
          .flat()
          .map((img, i) => (
            <div
              key={i}
              className="
                 flex flex-col items-center
                 w-36 sm:w-44 md:w-52
                 mx-2 sm:mx-4 md:mx-6
                 hover:scale-105 transition-transform duration-300
"
            >
              <div className="bg-white p-3 rounded-xl shadow-md border border-neutral-300 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.nombre}
                  loading="lazy"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          ))}
      </motion.div>
    </section>
  );
};

export default Resena;
