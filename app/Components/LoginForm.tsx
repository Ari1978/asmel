
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario || !contrasena) {
      setError('Por favor, complete todos los campos.');
    } else {
      setError('');
      console.log('Enviando:', { usuario, contrasena });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium">Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium">Contraseña</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Ingresar
      </button>

      <div className="mt-4 text-center">
        <Link href="/recuperar" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu usuario o contraseña?
        </Link>
      </div>
    </form>
  );
}
