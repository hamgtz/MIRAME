import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="py-10 px-6 bg-neutral-900 text-gray-300 border-t border-neutral-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nombre */}
        <p className="text-lg tracking-wide text-mostaza-5">
          MÍRAME &copy; {new Date().getFullYear()}
        </p>

        {/* Derechos */}
        <p className="text-sm text-center md:text-left text-blue-100">
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
