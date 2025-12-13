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
  { src: logoCliente2 },
  { src: logoCliente3 },
  { src: logoCliente4 },
  { src: logoCliente5 },
  { src: logoCliente6 },
  { src: logoCliente7 },
  { src: logoCliente8 },
  { src: logoCliente9 },
  { src: logoCliente10 },
  { src: logoCliente11 },
  { src: logoCliente12 },
  { src: logoCliente13 },
];

const Resena = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#000000] via-[#263447] to-[#010715] text-center relative overflow-hidden">
      {/* Sección de Colaboradores */}
      <section ref={ref} className="relative overflow-hidden group">
        <motion.h1
          className="text-2xl md:text-3xl font-bold mb-6 text-mostaza-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Marcas Con Las Que Trabajamos
        </motion.h1>
        <motion.div
          className="h-1 w-24 bg-mostaza-5 mx-auto mb-10 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Galería horizontal infinita */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 7 }}
          className="flex w-max animate-[scroll_90s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        >
          {Array(2)
            .fill(imagenes)
            .flat()
            .map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-52 mx-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white p-3 rounded-xl shadow-md border border-neutral-300 flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.nombre}
                    loading="lazy"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <p className="mt-2 text-mostaza-5 font-semibold text-sm text-center">
                  {img.nombre}
                </p>
              </div>
            ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Resena;
