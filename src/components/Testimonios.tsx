import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Testimonios() {
  const testimonios = [
    {
      texto:
        "✨ Increíble trabajo, superaron mis expectativas. ¡Totalmente recomendado! ✨",
      autor: "Valeria R.",
    },
    {
      texto: "Profesionalismo y creatividad. Sin duda volveré a contratarlos.",
      autor: "Diego M.",
    },
    {
      texto: "Capturaron momentos únicos, el resultado fue maravilloso.",
      autor: "Camila P.",
    },
    {
      texto: "Todo el equipo fue amable, y las fotos... espectaculares.",
      autor: "José G.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white via-[#f8f8fa] to-white text-center relative overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-azul-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Lo Que Dicen De Nosotros
      </motion.h2>

      <motion.div
        className="h-1 w-24 bg-azul-10 mx-auto mb-14 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonios.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative bg-white p-10 rounded-[2rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute top-5 left-6 text-6xl text-mostaza-5/40 select-none">
              “
            </div>
            <p className="text-xl md:text-2xl italic leading-relaxed text-gray-700 mb-6 z-10 relative">
              {item.texto}
            </p>
            <p className=" text-azul-10 text-lg relative z-10">
              — {item.autor}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;
