import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="coryright">
        <p>AVISO DE PRIVACIDAD</p>
        <p>
          Copyright ©2022 All rights reserved | <br /> Grupo Requiez
        </p>
      </div>
      <div className="contact-info">
        <h3>CONTACTO</h3>
        <p className="contact-mail">
          <a href="mailto:hola@gruporequiez.com">hola@gruporequiez.com</a>
        </p>
        <p className="contact-phone">
          <a href="tel:3338337788">+52 (33) 3833 7788</a>
        </p>
        <div className="contact-social">
          <a
            href="https://www.facebook.com/Requiez.Oficina/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookRoundedIcon
              style={{
                fontSize: "40px",
                cursor: "pointer",
                color: "#fff",
                marginRight: "30px",
              }}
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/requiez.sillas/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon
              style={{
                fontSize: "40px",
                cursor: "pointer",
                color: "#fff",
                marginRight: "30px",
              }}
              className="footer-icon"
            />
          </a>
        </div>
      </div>
      <div className="newsletter">
        <div>
          <p>
            Suscríbete al newsletter
          </p>
          <input type="text" placeholder="   Nombre" />
          <input type="email" placeholder="   Email" />
          <input type="button" value="Enviar" className="newsletter-button" />
        </div>
      </div>
    </footer>
  );
}
