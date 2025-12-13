import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { motion } from "framer-motion";

import uno from "../assets/image/DSC06497-Mejorado-NR.jpg";
import dos from "../assets/image/DSC06783-Mejorado-NR.jpg";
import tres from "../assets/image/DSC07652-Mejorado-NR.jpg";
import cuatro from "../assets/image/DSC08676-Mejorado-NR.jpg";
import cinco from "../assets/image/DSC08868.jpg";
import seis from "../assets/image/DSC09334.jpg";
import siete from "../assets/image/DSC09365.jpg";
// import ocho from "../assets/image/fotografo.jpg";
import nueve from "../assets/image/gim.jpg";

const categorias = [
  { icon: "👗", label: "Moda" },
  { icon: "💍", label: "Bodas" },
  { icon: "🎂", label: "Eventos" },
  { icon: "📸", label: "Desfiles" },
  { icon: "👨‍👩‍👧‍👦", label: "Belleza" },
  { icon: "🏞️", label: "Retartos" },
  { icon: "🏞️", label: "Paisaje" },
  { icon: "🚴‍♂️", label: "deporte" },
];

function Galeria() {
  const imagenes = [uno, dos, tres, cuatro, cinco, seis, siete, nueve];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] text-center relative overflow-hidden">
      {/* TÍTULO MEJORADO */}
      <motion.h2
        className="text-4xl md:text-5xl mb-16 text-mostaza-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Galería de Inspiración
        </motion.span>
      </motion.h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000, // un pelín más lento y elegante
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full max-w-7xl px-8"
      >
        {imagenes.map((img, index) => (
          <SwiperSlide
            key={index}
            className="relative w-64 md:w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105"
          >
            {/* Imagen */}
            <img
              src={img}
              alt={`Foto ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />

            {/* Icono categoría */}
            <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
              <span>{categorias[index % categorias.length].icon}</span>
              <span>{categorias[index % categorias.length].label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flechas Custom */}
      <button className="custom-prev absolute top-1/2 left-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-mostaza-5/80 text-white text-3xl flex items-center justify-center z-20 transition-all duration-300 shadow-lg backdrop-blur-sm">
        ‹
      </button>
      <button className="custom-next absolute top-1/2 right-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-mostaza-5/80 text-white text-3xl flex items-center justify-center z-20 transition-all duration-300 shadow-lg backdrop-blur-sm">
        ›
      </button>

      {/* Pie de página */}
      <motion.p
        className="mt-10 text-gray-400 text-base italic tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        * Próximamente: nuestras mejores fotos aquí
      </motion.p>
    </section>
  );
}

export default Galeria;
