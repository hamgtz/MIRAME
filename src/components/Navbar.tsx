import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/image/logoMirame.png";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-4 inset-x-0 z-50
        flex justify-center
        pointer-events-none
      "
    >
      {/* CONTENEDOR REAL */}
      <div
        className="
          pointer-events-auto
          w-full max-w-7xl mx-auto
          px-4
        "
      >
        <div
          className="
            bg-mostaza-5/90 backdrop-blur-lg
            rounded-full shadow-xl
            flex items-center justify-between
            px-6 py-4
          "
        >
          {/* LOGO + TEXTO */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Mírame Logo"
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-xl md:text-2xl tracking-widest text-white font-hurmeBlack">
              MIRAME
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
        </div>

        {/* MENU MOBILE */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="
              mt-4 bg-mostaza-5/90 backdrop-blur-lg
              rounded-3xl px-6 pb-6
              md:hidden
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
