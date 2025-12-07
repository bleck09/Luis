import React from "react";
import { FaClock } from "react-icons/fa";
import "./Hora.css";

function Hora() {
  return (
    <div className="hora-container">
      
     

      <div className="hora-card">
        <FaClock className="hora-icon" />
        <span className="hora-text anim-hora">18:00 hrs</span>
      </div>

      <p className="hora-detalle">
        Les agradecemos su <span className="puntualidad"> puntualidad </span> 
        para compartir este momento tan especial.
      </p>

    </div>
  );
}

export default Hora;
