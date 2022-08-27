import "./about.css";
import Jigglypuff from "../../img/Jigglypuff.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">

                <div className="a-card">
                    <img
                        src={Jigglypuff}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Sobre Mi</h1>
                <p className="a-sub">
                    Actualmente tengo 30 años de edad. Trabajo en una empresa de Facturación Electrónica llamada: "Digifact". Llevo trabajando 5 años, recién cumplidos.
                </p>
                <br/>
                <p className="a-desc">
                    Me apasionan los videojuegos. Hoy en día me dedico a ser jugador profesional de Super Smash Bros. Ultimate.
                </p>
                <br/>
                <p className="a-desc">
                    Una de mis metas a cort-mediano plazo es convertirme en freelancer, ya que aprendería mucho a lo largo del tiempo, con nuevos retos que se presenten día a día, desarrollando proyectos nuevos.
                </p>
                <br/>
                <p className="a-desc">
                    A nivel personal me encantaría poner una cafetería con temática de Pokémon, dedicado a la repostería, ya que ésta es uno de mis pasatiempos
                </p>

            </div>
        </div>
    );
};

export default About;