import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1e293b] flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl mb-6 text-mostaza-5 tracking-wide text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Contáctanos
      </motion.h2>

      <motion.div
        className="h-1 w-24 bg-mostaza-5 mx-auto mb-10 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "left" }}
      />

      <motion.p
        className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Queremos ser parte de tus recuerdos. Completa el formulario o
        contactanos por WhatsApp y te responderemos lo antes posible.
      </motion.p>

      <motion.form
        className="w-full max-w-xl space-y-6 bg-white border border-mostaza-5 rounded-2xl shadow-xl p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div>
          <label className="block mb-2 font-medium text-lg text-mostaza-5">
            Nombre
          </label>
          <input
            type="text"
            className="w-full bg-white text-gray-800 border border-mostaza-5 rounded-lg px-5 py-3 text-lg placeholder-gray-400 focus:ring-2 focus:ring-mostaza-5 focus:outline-none transition"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-lg text-mostaza-5">
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full bg-white text-gray-800 border border-mostaza-5 rounded-lg px-5 py-3 text-lg placeholder-gray-400 focus:ring-2 focus:ring-mostaza-5 focus:outline-none transition"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-lg text-mostaza-5">
            Tu mensaje
          </label>
          <textarea
            rows={5}
            className="w-full bg-white text-gray-800 border border-mostaza-5 rounded-lg px-5 py-3 text-lg placeholder-gray-400 focus:ring-2 focus:ring-mostaza-5 focus:outline-none transition"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-mostaza-400 hover:bg-mostaza-5/90 text-azul-10 font-semibold text-lg px-8 py-4 rounded-lg w-full shadow-md transition-all duration-300"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>

      {/* <motion.a
      
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.38 0 0 5.38 0 12c0 2.11.55 4.14 1.59 5.93L0 24l6.28-1.64A11.88 11.88 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.83 9.83 0 0 1-5-1.36l-.36-.21-3.73.97.99-3.61-.23-.37A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.96 9.96 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.12-7.25c-.27-.14-1.59-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.33-.78-.69-1.31-1.53-1.47-1.78-.16-.25-.02-.39.12-.52.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.03-.48-.09-.14-.61-1.47-.83-2.02-.22-.55-.44-.47-.6-.48h-.52c-.18 0-.47.07-.7.34-.23.27-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.73.13.18 1.86 2.84 4.51 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.56-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.25-.18-.52-.32z" />
        </svg>
      </motion.a> */}
    </section>
  );
}

export default Contacto;
