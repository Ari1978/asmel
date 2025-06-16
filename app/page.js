"use client"


import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Cuerpo from "./Components/Cuerpo"
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
      </button>
      
      {mobileMenuOpen && (
        <nav>
          {/* Aquí tu menú para móvil */}
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Contacto</li>
          </ul>
        </nav>
      )}

      <Hero />
      <Cuerpo />
    </section>
  );
}
