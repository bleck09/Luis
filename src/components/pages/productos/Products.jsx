
import React from 'react'


import './Productos.css';
import TextoDesvanecido from "../../secciones/textos/textoDesvanecido/TextoDesvanecido";
import Musica from '../../secciones/musica/Musica'

import Hora from '../../secciones/hora/Hora';
import CuentaRegresiva from '../../secciones/cuentaRegresiva/CuentaRegresiva';


import ConfirmarAsistencia from '../../secciones/confirmarAsistencia/ConfirmarAsistencia';
import FechaEvento from '../../secciones/fechaEvento/FechaEvento';








function Products() {



  return (
    <>

      <section className='sec_inicio'>
        <TextoDesvanecido text="Señor, Gracias por permitirme llegar a este dia tan especial, en el que por primera vez recibire tu cuerpo y tu amor en la Sagrada Comunión. Gracias por acompañarme, cuidarme y enseñarme a caminar en tu luz. te entrego mi corazon con alegria y fe, y te pido que siempre estes conmigo, guiando cada paso de mi vida. Amén " delay={500} animateBy="words" className='Titulo_adri' />
      </section>
      <section className='sec_musica'>
        <Musica />
      </section>
      <section className='sec_inicio_parteInferior'>
        <TextoDesvanecido text="Mis Padres" delay={50} animateBy="words" className='Titulo_adri' />
        <p className='Texto_contenido_titulo'>
          Francisco Chambi Correa
        </p>
        <p className='Texto_contenido_titulo'>
          Agustina Mamani Inca
        </p>
        <br /><br /><br />
      </section>


      <section className='sec_fechaEvento'>
        <TextoDesvanecido text="Fecha del evento" delay={500} animateBy="words" className='Titulo_adri' />
        <FechaEvento/>
        <Hora />
      </section>

      <section className='sec_cuentaRegresiva'>
        <TextoDesvanecido text="Faltan" delay={500} animateBy="words" className='Titulo_adri' />
        <CuentaRegresiva />
      </section>
      
      

      
      <ConfirmarAsistencia />






    </>

  )
}

export default Products
