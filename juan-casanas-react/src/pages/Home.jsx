import{ React } from 'react';
import '../css/Home.css';
/* import juancasanas from '../imgs/Juan-Casañas.png'; */
import asumiendo from '../imgs/asumiendo.jpg';

const Home = () => {

  return (<>
  <div className='home'>
    <div className='introduction-container'>
      <p>Ex diputado Nacional. Candidato a Intendente de Yerba Buena 2023</p>
    </div>
    <div className='home-cover-container'>
    </div>
    <div className='home-body-container'>
      <div className='home-p-container' data-aos='fade-up'>
        <p>
          Soy ingeniero agrónomo, productor agropecuario y ex diputado
          nacional por la provincia de Tucumán, miembro de Juntos por el Cambio. <br /> <br />
          Inicié mi actividad gremial en el ámbito agropecuario en la Federación Agraria Argentina
          en 2008 y llegué a ser Secretario del Distrito 11 en Tucumán
        </p>
        <p>
          Asumí como diputado nacional en las elecciones legislativas del 2009
          como uno de los 11 diputados de orígen agropecuario.
        </p>
      </div>
      <div className='home-main-img-container'>
        <img src={asumiendo} alt='Juan Casañas' />
        <p>Juan Casañas asumiendo como Coordinador 
          de Cambio Rural
        </p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home