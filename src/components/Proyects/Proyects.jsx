import "./proyects.css";
import Proyecto1 from "../../img/Proyecto1.PNG"
import Proyecto3 from "../../img/Proyecto3.PNG"
import Proyecto4 from "../../img/Proyecto4.PNG"
import Proyecto5 from "../../img/Proyecto5.PNG"
import "../Proyect/proyect.css";
const Proyects = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Proyectos BootCamp</h1>
        <p className="pl-desc">
          En esta sección se encuentran los proyectos desarrollados a lo largo del curso.
        </p>
      </div>
      <div className="pl-list">
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="https://youssef992.github.io/proyecto-landing-page/" target="_blank" rel="noreferrer">
            <img src={Proyecto1} alt="" className="p-img" />
          </a>
          <h5>Proyecto 1- Landing Page Personal</h5>
          <p style={{fontSize:"11px"}}>Descripción: En este proyecto se creó un landing page utilizando HTML y CSS</p>
        </div>
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="https://youssef992.github.io/proyecto-3/" target="_blank" rel="noreferrer">
            <img src={Proyecto3} alt="" className="p-img" />
          </a>
          <h5>Proyecto 2- CRUD</h5>
          <p style={{fontSize:"11px"}}>Descripción: En este proyecto se creó un landing page utilizando HTML y CSS agregando CRUD</p>
       
        </div>
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="https://main--gilded-phoenix-1ae956.netlify.app/" target="_blank" rel="noreferrer">
            <img src={Proyecto4} alt="" className="p-img" />
          </a>
          <h5>Proyecto 3- CRUD</h5>
          <p style={{fontSize:"11px"}}>Descripción: En este proyecto se creó un landing page utilizando React - Bootstrap agregando CRUD con Firebase</p>
       
        </div>
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="https://vermillion-pixie-451b40.netlify.app/" target="_blank" rel="noreferrer">
            <img src={Proyecto5} alt="" className="p-img" />
          </a>
          <h5>Proyecto 5- CRUD</h5>
          <p style={{fontSize:"11px"}}>Descripción: En este proyecto se creó un Ecommerce utilizando React - Bootstrap agregando CRUD con MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Proyects;