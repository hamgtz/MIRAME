import { motion, useScroll, useTransform } from "framer-motion";
import VideoBg from "../assets/videos/naturaleza.mp4";
import Modelo from "../assets/image/buo.png";
import { useEffect, useState } from "react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center py-24"
    >
      {/* VIDEO FONDO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
        animate={{ scale: 1.1 }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <source src={VideoBg} type="video/mp4" />
      </motion.video>

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#002552] via-[#002552]/70 to-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* CONTENEDOR (MISMO QUE NAVBAR) */}
      <div
        className="
          relative z-10
          w-[95%] max-w-7xl mx-auto
          flex flex-col md:flex-row
          items-center justify-between
          gap-14 md:gap-28
          px-6
        "
      >
        {/* TEXTO */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[3rem] md:text-[4.5rem] uppercase tracking-[0.12em] text-mostaza-5 mb-6">
            MÍRAME
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-lg mx-auto md:mx-0">
            La fotografía que cuenta tu historia con elegancia y pasión.
          </p>

          <motion.a
            href="#contacto"
            className="
              inline-block px-14 py-4
              uppercase tracking-[0.12em]
              border border-white/40 rounded-full
              hover:border-mostaza-5 hover:text-mostaza-5
              transition-all
            "
            whileHover={{ scale: 1.05 }}
          >
            Reserva tu sesión
          </motion.a>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          className="flex-1 flex justify-center"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={Modelo}
            alt="Modelo"
            className="max-w-[65%] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
