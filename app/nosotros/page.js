"use client"
import "../globals.css";

export default function AboutAsmel() {
  return (
    <main className="Container">
      <section className="card">
        <h2 className="titulo">
          ¿Quién es <span className="parrafo">Asmel?</span>
        </h2>
        <p>
          Somos una organización profesional de servicios de salud para empresas,
          con más de 35 años de trayectoria, atendiendo a una gran cartera de clientes.
        </p>
        <p>
          Nuestra misión es optimizar la capacidad productiva de los recursos humanos,
          asegurando cumplimiento legal y bienestar laboral.
        </p>
        <p>
          Con infraestructura moderna y tecnología avanzada, brindamos asesoramiento
          médico, jurídico y en seguridad e higiene, garantizando una atención integral.
        </p>
        <p className="nosotros-contacto">
          ¿Querés saber más?{" "}
          <a href="/contacto" className="contactoButton">
            Contactanos
          </a>
        </p>
      </section>
    </main>
  );
}
