import Layout from './components/Layout';
import './css/App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './pages/AboutMe';

function App() {

  useEffect(()=>{
    Aos.init({ duration: 1500 })
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-mi' element={<AboutMe />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
