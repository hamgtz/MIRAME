import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="py-12 bg-neutral-900 text-gray-300 border-t border-neutral-700"
    >
      {/* CONTENEDOR CENTRAL */}
      <div
        className="w-[95%] max-w-7xl mx-auto px-6 
                      flex flex-col md:flex-row 
                      items-center justify-between gap-6 text-center md:text-left"
      >
        {/* Nombre */}
        <p className="text-lg tracking-wide text-mostaza-5 font-hurmeBlack">
          MÍRAME &copy; {new Date().getFullYear()}
        </p>

        {/* Derechos */}
        <p className="text-sm text-blue-100 max-w-md">
          Diseño Gráfico & Fotografía Profesional — Todos los derechos
          reservados.
        </p>

        {/* Redes */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://web.facebook.com/mirameagenciadepublicidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-xl"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
