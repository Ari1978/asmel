
'use client';

interface ServicioCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export default function ServicioCard({ titulo, descripcion, imagen }: ServicioCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Imagen */}
      <div className="w-full md:w-1/2">
        <img
          src={imagen}
          alt={titulo}
          className="object-cover w-full h-full max-h-64 md:max-h-full"
        />
      </div>

      {/* Texto y botón */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">{titulo}</h3>
          <p className="text-gray-600 text-lg mb-4">{descripcion}</p>
        </div>
        <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Más info
        </button>
      </div>
    </div>
  );
}
