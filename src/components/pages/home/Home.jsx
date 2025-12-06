import React from "react";
import "./Home.css";
import Folder from "../../secciones/folder/Folder";
import TextoDesvanecido from "../../secciones/textos/textoDesvanecido/TextoDesvanecido";
import BotonInvitacion from "../../secciones/botonInvitacion/BotonInvitacion";

const Home = () => {

  // Obtener parámetros desde el URL
  const params = new URLSearchParams(window.location.search);
  const invitadoID = params.get("i"); // enlace corto: ?i=

  // Diccionario de invitados
  const invitados = {
    juan: "Sr. Santiago",
    maria: "Sra. Maria",
    chambi: "Familia Chambi",
    padrinos: "Mis Padrinos",
    general: "Público general"
  };

  // Si existe en el diccionario, lo usamos — si no, usamos "Público general"
  const nombreInvitado = invitados[invitadoID] || invitados.general;

  const tituloInvitacion = "Invitación para:";

  return (
    <div className="fondo_invitacion">
      <div className="overlay">
        <TextoDesvanecido 
          text="Mis 15 Años" 
          delay={500} 
          animateBy="words" 
          className="Titulo_adriana_Principal" 
        />

        <br /><br /><br /><br /><br />

        <div className="home-container">
          <Folder
            size={2}
            className="custom-folder"
            color="var(--rosa-empolvado)"
            var_invitado={tituloInvitacion}
            var_nombre_invitado={nombreInvitado}
          />
        </div>

        <h2 className="mensaje_invitacion">
          Tenemos el honor de invitarle a celebrar los 15 años de nuestra hija.
        </h2>

        <BotonInvitacion />
      </div>
    </div>
  );
};

export default Home;
