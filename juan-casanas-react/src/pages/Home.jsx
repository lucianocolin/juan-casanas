import React from 'react';
import '../css/Home.css';
import juancasanas from '../imgs/Juan-Casañas.png';

const Home = () => {
  return (<>
  <div className='home'>
    <div className='home-cover-container'>
      <img src={juancasanas} alt="Juan Casañas" />
    </div>
    <section className='home-p-container'>
      <p>
        Soy ingeniero agrónomo, productor agropecuario y ex diputado
        nacional por la provincia de Tucumán, miembro de la Unión Civica Radical.
      </p>
    </section>
  </div>
  </>
  )
}

export default Home