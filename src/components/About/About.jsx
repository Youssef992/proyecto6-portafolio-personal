import "./about.css";
import Jigglypuff from "../../img/Jigglypuff.png";
import Cine from "../../img/cine.png";
import Gaming from "../../img/gaming.png";
import Gym from "../../img/gym.png";
import Programmer from "../../img/programmer-icon.png";
import Smash from "../../img/smash.png";
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
                    Tengo 30 años de edad. Trabajo en una empresa de Facturación Electrónica.
                </p>
                <br/>
                <h1 className="a-title">Hobbies</h1>
                <div className="container">
                    <img src={Cine} alt="" className="img-hobbies" />
                    <img src={Gaming} alt="" className="img-hobbies" />
                    <img src={Gym} alt="" className="img-hobbies" />
                    <img src={Programmer} alt="" className="img-hobbies" />
                    <img src={Smash} alt="" className="img-hobbies" />
                </div>
            
               

            </div>
        </div>
    );
};

export default About;