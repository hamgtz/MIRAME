import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { motion } from "framer-motion";

// IMÁGENES
import uno from "../assets/image/DSC06497-Mejorado-NR.jpg";
import dos from "../assets/image/DSC06783-Mejorado-NR.jpg";
import tres from "../assets/image/DSC07652-Mejorado-NR.jpg";
import cuatro from "../assets/image/DSC08676-Mejorado-NR.jpg";
import cinco from "../assets/image/DSC08868.jpg";
import seis from "../assets/image/DSC09334.jpg";
import siete from "../assets/image/DSC09365.jpg";
import nueve from "../assets/image/gim.jpg";

// CATEGORÍAS
const categorias = [
  { icon: "👗", label: "Moda" },
  { icon: "💍", label: "Bodas" },
  { icon: "🎂", label: "Eventos" },
  { icon: "📸", label: "Desfiles" },
  { icon: "👨‍👩‍👧‍👦", label: "Belleza" },
  { icon: "🧍‍♂️", label: "Retratos" },
  { icon: "🏞️", label: "Paisaje" },
  { icon: "🚴‍♂️", label: "Deporte" },
];

function Galeria() {
  const imagenes = [uno, dos, tres, cuatro, cinco, seis, siete, nueve];

  return (
    <section
      id="galeria"
      className="py-24 bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] relative overflow-hidden"
    >
      {/* CONTENEDOR */}
      <div className="w-[95%] max-w-7xl mx-auto px-6 text-center">
        {/* TÍTULO */}
        <motion.h2
          className="text-4xl md:text-5xl mb-16 text-mostaza-5 font-hurmeBlack"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Galería de Inspiración
        </motion.h2>

        {/* SWIPER */}
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="w-full"
        >
          {imagenes.map((img, index) => (
            <SwiperSlide
              key={index}
              className="
    relative
    w-60
    sm:w-64
    md:w-72
    lg:w-80
    xl:w-[360px]
    h-[260px]
    sm:h-[320px]
    md:h-[380px]
    lg:h-[440px]
    xl:h-[480px]
    max-w-[360px]
    max-h-[480px]
    rounded-3xl
    overflow-hidden
    shadow-xl
    transition-transform
    duration-500
    hover:scale-[1.03]
  "
            >
              {/* FOTO DE FONDO (solo desktop) */}
              <img
                src={img}
                alt=""
                className="
      hidden
      lg:block
      absolute
      inset-0
      w-full
      h-full
      object-cover
      scale-110
      blur-2xl
      opacity-50
    "
              />

              {/* FOTO PRINCIPAL */}
              <img
                src={img}
                alt={`Foto ${index + 1}`}
                className="
      relative
      z-10
      w-full
      h-full
      object-contain
      lg:object-cover
      bg-gradient-to-b
      from-[#FFB300]/20
      via-black
      to-black
    "
              />

              {/* OVERLAY SUAVE */}
              <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />

              {/* CATEGORÍA */}
              <div className="absolute top-4 left-4 z-30 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
                <span>{categorias[index % categorias.length].icon}</span>
                <span>{categorias[index % categorias.length].label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* FLECHAS */}
        <button className="custom-prev absolute top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-mostaza-5/80 text-white text-3xl flex items-center justify-center z-20 backdrop-blur-md shadow-lg">
          ‹
        </button>

        <button className="custom-next absolute top-1/2 right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-mostaza-5/80 text-white text-3xl flex items-center justify-center z-20 backdrop-blur-md shadow-lg">
          ›
        </button>

        {/* PIE */}
        <motion.p
          className="mt-10 text-gray-400 italic tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          * Próximamente: nuestras mejores fotos aquí
        </motion.p>
      </div>
    </section>
  );
}

export default Galeria;
