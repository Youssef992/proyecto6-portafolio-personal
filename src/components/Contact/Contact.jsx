import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contáctame</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +52 56 2176 8038
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              youssef19922001@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Cda. Melocotones 20 D, Col. Jardines de San Mateo, C.P 53240
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Tienes alguna duda?</b> Escríbeme. Siempre estaré disponible para atenderte.
          </p>
          <form >
            <input  type="text" placeholder="Nombre" name="user_name" />
            <input  type="text" placeholder="Asunto" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Contexto" name="message" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;