import React, { useState } from 'react';
import '../styles/Panel.css';


const Panel = ({ background, title, subtitle, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className={`panel ${background} normal-shadow ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <h3>{title}</h3>
      <div className="informacion">
        <span>{subtitle}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="container">
      <Panel
        background="cemento-concreto"
        title="Calidad"
        subtitle="Nuestra calidad"
        content="Los mejores agregados y aditivos, hacen de nuestros productos la mezcla perfecta entre innovacion y calidad."
      />
      <Panel
        background="construsistemas"
        title="Confiabilidad"
        subtitle="Confiabilidad"
        content="Tu obra está en las mejores manos, con nuestra garantia de resistencia y trabajabilidad (revenimiento y fraguado)."
      />
      <Panel
        background="soluciones-agua"
        title="Servicio"
        subtitle="Excelente servicio"
        content="Contamos con el mejor equipo operativo, listo para trabajar para ti. Sin importar el día y la hora, la flexibilidad en nuestro servicio nos permite adaptarnos a los tiempos que requieres para tu proyecto."
      />
      <Panel
        background="herramientas"
        title="Tecnología"
        subtitle="Somos tecnología"
        content="Nustra alta tecnologá a ti disposicíon, para llevar a tu obra al más alto nivel."
      />
    </div>
  );
};

export default Container;
