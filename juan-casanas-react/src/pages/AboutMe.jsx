import React from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (<>
    <div>
      <div className='name-jfc'>
        <h2>Juan Francisco Casañas</h2>
      </div>
      <h4>
        Padre de 3 hijos <br />
        Ingeniero agrónomo <br />
        Empresario <br />
        Productor agropecuario
      </h4>
      <div className='about-me-cover'></div>
      <div className='about-me-text'>
        <p>
        Realicé mi educación secundaria en el <b>Colegio 
        Nacional de Tucumán</b>. En 1992 me recibí de ingeniero agrónomo de la 
        Universidad Nacional de Tucumán. Profesión que ejerzo. También soy productor agropecuario. 
        En el año 2009 asumió su banca como diputado nacional por la provincia de Tucumán 
        por el Acuerdo Cívico y Social, luego del paro agropecuario patronal en Argentina de 2008.
        Desde el año 2003 es miembro del Grupo El Palomar de la región del Noroeste de la 
        Asociación Regional de Consorcios de Experimentación Agrícola (AACREA). 
        Como miembro CREA se desempeñó como Vocal de la Zona NOA.
        </p>
      </div>
    </div>
  </>
  )
}

export default AboutMe