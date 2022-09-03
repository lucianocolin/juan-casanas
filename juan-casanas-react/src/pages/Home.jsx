import{ React, useEffect} from 'react';
import '../css/Home.css';
import juancasanas from '../imgs/Juan-Casañas.png';
import juancasanas2 from '../imgs/Juan-Casañas2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    Aos.init({ duration: 1500 })
  }, []);

  return (<>
  <div className='home'>
    <div className='home-cover-container'>
      <img src={juancasanas} alt="Juan Casañas" />
    </div>
    <div className='home-main-img-container'>
      <img src={juancasanas2} alt='Juan Casañas' />
    </div>
    <div className='home-p-container'>
      <p data-aos='fade-up'>
        Soy ingeniero agrónomo, productor agropecuario y ex diputado
        nacional por la provincia de Tucumán, miembro de la Unión Civica Radical. <br /> <br />
        Inicié mi actividad gremial en el ámbito agropecuario en la Federación Agraria Argentina
        en 2008 y llegué a ser Secretario del Distrito 11 en Tucumán
      </p>
      <p data-aos='fade-up'>
        Asumí como diputado nacional en las elecciones legislativas del 2009
        como uno de los 11 diputados de orígen agropecuario.
      </p>
    </div>
  </div>
  </>
  )
}

export default Home