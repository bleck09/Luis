
import React from 'react'
import GaleriaFotos from '../../secciones/galeriaFotos/GaleriaFotos'



import './Productos.css';
import TextoDesvanecido from "../../secciones/textos/textoDesvanecido/TextoDesvanecido";
import Musica from '../../secciones/musica/Musica'
import ChatResp from '../../secciones/chatResp/ChatResp';
import Hora from '../../secciones/hora/Hora';
import CuentaRegresiva from '../../secciones/cuentaRegresiva/CuentaRegresiva';
import Lugar from '../../secciones/lugar/Lugar';
import RedesSociales from '../../secciones/redesSociales/RedesSociales';
import ConfirmarAsistencia from '../../secciones/confirmarAsistencia/ConfirmarAsistencia';
import CarruselAntiguo from '../../secciones/carruselAntiguo/CarruselAntiguo';
import BotonAlbun from '../../secciones/botonAlbun/BotonAlbun';






function Products() {

  const cardsData = [
    {
      id: 1,
      img: "/Adriana/imagenes/adriFotos1.webp",
      title: 'Invitación Clásica',
      description: 'Un diseño elegante con tonos suaves y detalles dorados.',
      boton: '/invitacion1'
    },
    {
      id: 2,
      img: "/Adriana/imagenes/adriFotos2.webp",
      title: 'Estilo Moderno',
      description: 'Ideal para eventos contemporáneos con líneas limpias.',
      boton: '/invitacion2'
    },
    {
      id: 3,
      img: "/Adriana/imagenes/adriFotos3.webp",
      title: 'Toque Floral',
      description: 'Perfecta para bodas o cumpleaños con temática natural.',
      boton: '/invitacion3'
    },
    {
      id: 4,
      img: "/Adriana/imagenes/adriFotos6.webp",
      title: 'Minimalista',
      description: 'Sencillez y elegancia en un formato limpio y moderno.',
      boton: '/invitacion4'
    },
    {
      id: 5,
      img: "/Adriana/imagenes/adriFotos5.webp",
      title: 'Minimalista',
      description: 'Sencillez y elegancia en un formato limpio y moderno.',
      boton: '/invitacion4'
    },
    {
      id: 6,
      img: "/Adriana/imagenes/adriFotos4.webp",
      title: 'Minimalista',
      description: 'Sencillez y elegancia en un formato limpio y moderno.',
      boton: '/invitacion4'
    }
  ];

  return (
    <>
     
        <section className='sec_inicio'>
          <TextoDesvanecido text="Mis 15 Años" delay={500} animateBy="words" className='Titulo_adri' />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <GaleriaFotos
              cards={cardsData}
              randomRotation={true}
              sensitivity={150}
              cardDimensions={{ width: 280, height: 380 }}
              animationConfig={{ stiffness: 260, damping: 20 }}
              sendToBackOnClick={true}
            />
          </div>
          <br /><br />
          <BotonAlbun />
          <br />
        </section>
        <section className='sec_musica'>
          <Musica />
        </section>
        <section className='sec_inicio_parteInferior'>
          <TextoDesvanecido text="Adriana Belen" delay={500} animateBy="words" className='Titulo_adri' />
          <h2 className="Texto_contenido">
            En este cuento de hadas, me toca sentirme como una princesa.
            Pero en mi sueño encantado, todos son protagonistas de este cuento feliz, inolvidable y magico
          </h2>
          <p className='Texto_contenido_titulo'>
            Con el amor de mis Padres
          </p>
          <div className="contenedor-padres">
            <h2 className="nombres-padres">
              FELIPE CHAMBI C.
            </h2>
            <h2 className="nombres-padres">
              MARTHA REVOLLO L.
            </h2>
          </div>
          <p className='Texto_contenido_titulo'>
            dejo un mundo atras y entro a uno nuevo
          </p>
          <br /><br /><br />
        </section>


        <section className='sec_fechaEvento'>
          <TextoDesvanecido text="Fecha del evento" delay={500} animateBy="words" className='Titulo_adri' />

          <Hora />
        </section>

        <section className='sec_cuentaRegresiva'>
          <TextoDesvanecido text="Faltan" delay={500} animateBy="words" className='Titulo_adri' />
          <CuentaRegresiva />
        </section>
        <section className='sec_Recepcion'>
          <TextoDesvanecido text="Recepcíon" delay={500} animateBy="words" className='Titulo_adri' />
          <Lugar />
        </section>
        <section className='sec_Obsequios'>
          <br />
          <p className='Texto_contenido_titulo'>
            El mayor de los regalos será contar con tu compañía
          </p>

          <br /><br /><br />
        </section>
        <section className='sec_redesSociales'>

          <RedesSociales />
        </section>

        <section className='sec_Teesperamos'>
          <TextoDesvanecido text="Te esperamos" delay={500} animateBy="words" className='Titulo_adri' />
          <p className='Texto_contenido_titulo'>
            Tú presencia es muy importante para
            celebrar este gran día. Confirma tu asistencia con un clic
          </p>
          <ConfirmarAsistencia />
          <br /><br /><br />

        </section>
        <CarruselAntiguo />
        <section className="sec_chat">
          <TextoDesvanecido text="Asistente Virtual" delay={500} animateBy="words" className='Titulo_adri' />
          <ChatResp />
        </section>





    </>

  )
}

export default Products
