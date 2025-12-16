import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import VideoBg from "../assets/videos/naturaleza.mp4";
import Modelo from "../assets/image/buo.png";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // SCROLL EFFECT
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
      className="
        relative
        min-h-[100svh]
        bg-black text-white
        overflow-hidden
        px-6 md:px-10
        pt-[120px] sm:pt-[140px]
      "
    >
      {/* VIDEO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] contrast-[1.1]"
        animate={{ scale: 1.1 }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
      >
        <source src={VideoBg} type="video/mp4" />
      </motion.video>

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#002552] via-[#002552]/70 to-black backdrop-blur-[2px]"
        style={{ opacity: overlayOpacity }}
      />

      {/* WRAPPER QUE CENTRA DE VERDAD */}
      <div className="relative z-10 h-[calc(100svh-120px)] sm:h-[calc(100svh-140px)] flex items-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* TEXTO */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] font-light leading-tight mb-4">
              <span className="block font-semibold text-mostaza-5">
                Hacemos que tu marca se vea, se sienta y se recuerde
              </span>
            </h1>

            <div className="w-20 h-[2px] bg-mostaza-5 my-6 mx-auto md:mx-0" />

            <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto md:mx-0 mb-8">
              Fotografía, video, animaciones, diseño y desarrollo web para
              cubrir eventos y potenciar marcas con impacto visual real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#contacto"
                className="relative px-10 py-3 uppercase tracking-[0.15em] border border-white/40 rounded-full overflow-hidden hover:border-mostaza-5 hover:text-mostaza-5 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <span className="absolute inset-0 bg-mostaza-5/20 -translate-x-full hover:translate-x-0 transition-transform duration-700" />
                <span className="relative z-10">Cotiza con nosotros</span>
              </motion.a>

              <motion.a
                href="#portafolio"
                className="px-10 py-3 uppercase tracking-[0.15em] text-white/70 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                Ver servicios
              </motion.a>
            </div>

            <p className="text-xs sm:text-sm text-white/50 mt-6 tracking-wide">
              Publicidad · Eventos · Fotografía · Video · Web · Marketing
            </p>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.img
              src={Modelo}
              alt="Imagen representativa"
              className="max-w-[220px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px]"
            />
          </motion.div>
        </div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <svg
          className="w-6 h-6 text-white/70"
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
