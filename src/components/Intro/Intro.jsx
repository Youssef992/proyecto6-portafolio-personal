import React from 'react'
import "./intro.css"
import Me from '../../img/Trunks.png'

const Intro = () => {
    return (
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hola, Mi nombre es...</h2>
            <h1 className="i-name">Manuel Morales</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Desarrollador Full Stack</div>
                <div className="i-title-item">Desarrollador .NET</div>
                <div className="i-title-item">Gamer</div>
                <div className="i-title-item">Jugador Profesional Smash Bros</div>
              </div>
            </div>
            <p className="i-desc">
              Desarrollo y creo servicios para la emisión de facturas. Actualmente culminé el bootcamp como Desarrollador FullStack, para desenvolverme en el mundo del Freelancer
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    );
  };
  
  export default Intro;