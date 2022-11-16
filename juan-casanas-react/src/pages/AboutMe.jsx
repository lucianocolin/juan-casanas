import React from "react";
import "../css/AboutMe.css";

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
          <h2>Política</h2>
          <p>
            Inicié mi actividad política en el ámbito agropecuario en la
            <b> Federación Agraria Argentina</b>, donde me afilié en
            2008, llegando a ser Secretario del Distrito 11 en Tucumán.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
