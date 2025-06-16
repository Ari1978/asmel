
'use client';
import '../globals.css'; // ruta según tu estructura

import { useState } from 'react';

export default function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setTimeout(() => {
      setEnviado(true);
      setError('');
      setNombre('');
      setEmail('');
      setMensaje('');
    }, 1000);
  };

  return (
    <main className="contact-main">
      <h1 className="contact-title">Formulario de Contacto</h1>
      <p className="contact-description">
        Completa el siguiente formulario y un representante de Asmel se pondrá en contacto contigo a la brevedad.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="contact-error">{error}</p>}
        {enviado && <p className="contact-success">¡Mensaje enviado con éxito!</p>}

        <div>
          <label className="contact-label">Nombre</label>
          <input
            type="text"
            className="contact-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="contact-label">Correo electrónico</label>
          <input
            type="email"
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="contact-label">Mensaje</label>
          <textarea
            className="contact-textarea"
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="contact-button">Enviar mensaje</button>
      </form>
    </main>
  );
}
