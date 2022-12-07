import React from "react";
import "../css/AboutMe.css";
import juan6 from "../imgs/juan6.jpg";
import juan7 from "../imgs/juan7.jpg";

const AboutMe = () => {
  return (
    <>
      <div>
        <div className="name-jfc">
          <h2>Juan Francisco Casañas</h2>
        </div>
        <h4>
          Padre de 3 hijos <br />
          Ingeniero agrónomo <br />
          Empresario <br />
          Productor agropecuario
        </h4>
        <div className="about-me-body">
          <div className="about-me-cover"></div>
          <div className="about-me-text">
            <h2>Estudios</h2>
            <p>
              Realicé mis estudios primarios en el{" "}
              <b>Colegio Salesiano Tulio García Fernández. </b>
              Luego mi educación secundaria en el{" "}
              <b>Colegio Nacional de Tucumán</b>. En 1992 me recibí de{" "}
              <b>ingeniero agrónomo</b> de la
              <b> Universidad Nacional de Tucumán</b>. Profesión que ejerzo.{" "}
              <br />
            </p>
            <h2>Actividad en el campo</h2>
            <p>
              También soy <b>productor agropecuario </b>
              con actividades en granos, limón y cerdos. Desde el año 2003 soy
              miembro del Grupo El Palomar de la región del Noroeste de la{" "}
              <b>
                {" "}
                Asociación Regional de Consorcios de Experimentación Agrícola{" "}
              </b>
              (AACREA). Como miembro de la asociación me desempeño como Vocal de
              la Zona NOA.
            </p>
            </div>
            <div className="about-me-cards">
              <img src={juan6} alt="Juan Casañas en la tele" />
              <p>Juan Casañas analizando la actualidad del agro </p>
            </div>
            <div className="about-me-text">
            <h2>Política</h2>
            <p>
              Inicié mi actividad política en el ámbito agropecuario en la
              <b> Federación Agraria Argentina</b>. Me involucré
              en el <b>paro agropecuario</b> patronal en Argentina de 2008
              producido a causa de la <b>Resolución 125</b>. Luego participé en las
              <b> elecciones legislativas</b> del 28 de junio de 2009, como candidato a
              <b> Diputado Nacional.</b> <br />
              En las elecciones legislativas de 2009, resulté electo para la 
              Cámara de Diputados, con el <b>15,56% (112.182 votos)</b>, cargo 
              que ejercí hasta el 10 de diciembre de 2013. <br />
              El 3 de abril de 2014 reasumí como <b>Diputado Nacional</b> nuevamente
              hasta el 2017.
            </p>
          </div>
          <div className="about-me-cards">
            <img src={juan7} alt="Juan Casañas en su rol de diputado" />
            <p>Juan Casañas en su rol de Diputado Nacional</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
