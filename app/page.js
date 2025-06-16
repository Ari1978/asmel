"use client";
import { useState, useEffect } from "react"; 
import Cuerpo from "./Components/Cuerpo";

import Hero from "./Components/Hero"


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Opcional: cerrar menú móvil si se hace resize a pantalla mayor que md
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
      
      <div>
        <Hero />
      </div>
      <div>
        <Cuerpo />
      </div>
      
    </section>
  );
}
