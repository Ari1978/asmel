'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      {/* Imagen de fondo */}
      <img
        src="https://www.quironprevencion.com/blogs/es/prevenidos/entendiendo-mejor-medicina-trabajo.ficheros/44045-medicinatrabajo848.jpg?width=848&height=418"
        alt="Fondo salud laboral"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Capa oscura para legibilidad */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl px-6 text-center animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          Salud laboral al servicio de tu empresa
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Servicios médicos a medida para cuidar a tu equipo, cumplir con normativas y mejorar el rendimiento.
        </p>
        <Link
          href="/conocerMas"
          className="inline-block bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 text-white font-semibold px-6 py-3 rounded-md transition"
          aria-label="Conocer más sobre medicina laboral"
        >
          Conocé más
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
