import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/image/logoMirame.png";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Testimonio", href: "#testimonio" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80); // apenas bajas un poco
  });

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed top-3 inset-x-0 z-50
        flex justify-center
        pointer-events-none
      "
    >
      {/* CONTENEDOR */}
      <div className="pointer-events-auto w-full max-w-7xl mx-auto px-4">
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(0,0,0,0.35)" // más transparente al bajar
              : "rgba(255, 179, 0, 0.9)", // mostaza arriba
            backdropFilter: scrolled ? "blur(10px)" : "blur(16px)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            rounded-full shadow-xl
            flex items-center justify-between
            px-6 py-4
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Mírame Logo"
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-xl md:text-2xl tracking-widest text-white font-hurmeBlack">
              MÍRAME
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-10 text-white font-hurmeOblique">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative after:absolute after:left-0 after:-bottom-1
                    after:w-0 after:h-[2px] after:bg-white
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </motion.div>

        {/* MENU MOBILE */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="
              mt-4 bg-black/40 backdrop-blur-xl
              rounded-3xl px-6 pb-6 md:hidden
            "
          >
            <ul className="flex flex-col gap-4 text-white text-lg font-hurmeOblique">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/30 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
