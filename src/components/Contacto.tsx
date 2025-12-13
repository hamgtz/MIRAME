import { motion } from "framer-motion";

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
    </section>
  );
}

export default Contacto;
