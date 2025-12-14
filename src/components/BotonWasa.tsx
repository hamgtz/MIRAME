import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function BotonWasa() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("section");
      const footer = document.querySelector("footer");

      if (!hero || !footer) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // 👇 Mostrar el botón solo cuando el usuario ha pasado el Hero
      //     y todavía no ha llegado al Footer
      if (heroBottom < 0 && footerTop > windowHeight + 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 🔘 BOTÓN FLOTANTE DE WHATSAPP
    <motion.a
      href="https://wa.me/51904536986"
      target="_blank"
      rel="noopener noreferrer"
      // Aparece/desaparece suavemente con escala y opacidad
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.4 }}
      // 🔩 Estilos base
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg"
      style={{
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: "#25D366", // ✅ Color sólido de WhatsApp
      }}
      // Efecto elegante al pasar el cursor (crece un poco y brilla)
      whileHover={{
        scale: 1.15,
        boxShadow: "0px 0px 20px rgba(37, 211, 102, 0.5)",
      }}
      // Efecto al hacer clic (ligeramente más pequeño)
      whileTap={{ scale: 0.95 }}
    >
      {/* 🔄 Efecto sutil de "latido" o respiración */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px rgba(37, 211, 102, 0.0)",
            "0 0 10px rgba(37, 211, 102, 0.4)",
            "0 0 0px rgba(37, 211, 102, 0.0)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* 📱 Ícono de WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7 relative z-10"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.38 0 0 5.38 0 12c0 2.11.55 4.14 1.59 5.93L0 24l6.28-1.64A11.88 11.88 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.83 9.83 0 0 1-5-1.36l-.36-.21-3.73.97.99-3.61-.23-.37A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.96 9.96 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.12-7.25c-.27-.14-1.59-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.33-.78-.69-1.31-1.53-1.47-1.78-.16-.25-.02-.39.12-.52.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.03-.48-.09-.14-.61-1.47-.83-2.02-.22-.55-.44-.47-.6-.48h-.52c-.18 0-.47.07-.7.34-.23.27-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.73.13.18 1.86 2.84 4.51 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.56-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.25-.18-.52-.32z" />
      </svg>
    </motion.a>
  );
}

export default BotonWasa;
