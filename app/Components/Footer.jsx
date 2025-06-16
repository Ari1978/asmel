
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-400 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          {/* Logo y descripción */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src="/logo-asmel.svg"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">Asmel</span>
            </Link>

            <p className="text-gray-700">
              Asmel es líder en soluciones integrales de medicina laboral para tu empresa.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">Servicios</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">Nosotros</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link href="/help-center" className="hover:text-blue-600 transition">Centro de ayuda</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition">Política de privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacto</h3>
            <address className="not-italic space-y-2 text-gray-700">
              <p>📍 Calle Ugarte 3141/45, Olivos, Buenos Aires</p>
              <p>📞 +011 4796-1920</p>
              <p>✉️ <a href="mailto:info@asmel.com" className="hover:text-blue-600 transition">info@asmel.com</a></p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.8v-6.9h-2.4v-2.9h2.4v-2.2c0-2.4 1.4-3.7 3.5-3.7 1 0 2.1.2 2.1.2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.4l-.4 2.9h-2v6.9A10 10 0 0 0 22 12"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.1.9 5.4 5.4 0 0 0 2.4-3 10.7 10.7 0 0 1-3.4 1.3 5.3 5.3 0 0 0-9.1 4.8 15 15 0 0 1-10.9-5.5 5.3 5.3 0 0 0 1.6 7.1 5.2 5.2 0 0 1-2.4-.7v.1a5.3 5.3 0 0 0 4.3 5.2 5.3 5.3 0 0 1-2.4.1 5.3 5.3 0 0 0 5 3.6 10.6 10.6 0 0 1-6.6 2.3c-.4 0-.9 0-1.3-.1a15 15 0 0 0 8.2 2.4c9.9 0 15.3-8.2 15.3-15.3l-.1-.7A11 11 0 0 0 23 3"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h4v1.5h.1a4.4 4.4 0 0 1 4-2.2c4.3 0 5 2.8 5 6.4V21h-4v-5.7c0-1.4-.1-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H9z"/></svg>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-400 pt-6 text-center text-sm text-gray-600 select-none">
          © {new Date().getFullYear()} Asmel. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
