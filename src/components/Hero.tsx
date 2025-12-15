import { motion, useScroll, useTransform } from "framer-motion";
import VideoBg from "../assets/videos/naturaleza.mp4";
// import FondoImg from "../assets/image/DSC06783-Mejorado-NR.jpg";
// import Logo from "../assets/image/logoMirame.png";
import Modelo from "../assets/image/buo.png";
import { useEffect, useState } from "react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 🔥 SCROLL EFFECT PARA LA CAPA OSCURA
  const { scrollYProgress } = useScroll();
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.9, 0.6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-black text-white px-8 py-24 overflow-hidden"
    >
      {/* IMAGEN DE FONDO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] contrast-[1.1]"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
      >
        <source src={VideoBg} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </motion.video>
      y{/* CAPA OSCURA CON DEGRADADO + SCROLL */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#002552] via-[#002552]/70 to-black backdrop-blur-[2px]"
        style={{ opacity: overlayOpacity }}
      />
      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-14 md:gap-30">
        {/* TEXTO */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* <motion.img
            src={Logo}
            alt="Mírame Logo"
            className="w-30 md:w-36 mb-2 mx-auto md:mx-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          /> */}

          {/* <h1 className="text-[3rem] md:text-[4.5rem] uppercase tracking-[0.12em] mb-6 leading-tight text-mostaza-5">
            MÍRAME
          </h1> */}

          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-lg mx-auto md:mx-0">
            La fotografía que cuenta tu historia con elegancia y pasión.
          </p>

          <motion.a
            href="#contacto"
            className="group relative inline-block px-12 md:px-16 py-4 md:py-5 text-base md:text-lg uppercase tracking-[0.12em] text-white border border-white/40 rounded-full overflow-hidden transition-all duration-700 hover:border-mostaza-5 hover:text-mostaza-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-mostaza-5/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 rounded-full" />
            <span className="relative z-10">Reserva tu sesión</span>
          </motion.a>
        </motion.div>

        {/* IMAGEN MODELO */}
        <motion.div
          className="flex-1 relative flex justify-center items-center"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
          initial={{ opacity: 0, x: 20, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <motion.img
            src={Modelo}
            alt="Modelo posando"
            className="max-w-[150px] md:max-w-[300px] lg:max-w-[65%] h-auto object-contain"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
      {/* FLECHA */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
