import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import fb from "../../../assets/LOGOS/fb.webp";
import ig from "../../../assets/LOGOS/ig.webp";
import li from "../../../assets/LOGOS/li.webp";
import tt from "../../../assets/LOGOS/tt.png";

import logo from "../../../assets/logo_footer.png";
import carrito from "../../../assets/carrito.png";

import BlogDataService from "../../../services/services";

import "./Footer.css";

export default function Footer() {
  const [data, setData] = useState({ name: "", email: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    e.target.reset();
    BlogDataService.createNewsletter(data);
  };

  return (
    <footer>
      <div className="coryright">
        <div className="div">
          <img style={{ width: '220px' }} src={ logo } alt="Grupo Requiez Logo" />
          <p style={{ marginTop: '20px ' }}>
            <a
              href="/files/aviso_privacidad_grupo_requiez.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#FFF', textDecoration: 'none' }}
            >
              AVISO DE PRIVACIDAD
            </a>
          </p>
          <p>
            Copyright ©2022 All rights reserved
            <br />
            Grupo Requiez
          </p>
          <div className="tienda-gruporequiez" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="https://tienda.gruporequiez.com/" rel='noreferrer' target='_blank'>
              <button style={{ 
                  height: '30px',
                  width: '210px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  color: 'var(--color-verdeoscuro)'
                }}>
                Visíta nuestra tienda en línea
              </button>
            </a>
            <span style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
              <img style={{ height: '25px' }} src={carrito} alt="Grupo Requiez - Tienda en Linea" />
            </span>
          </div> 
        </div>
      </div>
      <div className="contact-info">
        <div className="div">
          <h3>CONTACTO</h3>
          <p className="contact-mail">
            <a href="mailto:hola@gruporequiez.com">hola@gruporequiez.com</a>
          </p>
          <p className="contact-phone">
            <a href="tel:3338337788">+52 (33) 3833 7788</a>
          </p>
          <div className="contact-social">
            <a
              href="https://www.facebook.com/gruporequiezgdl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={fb}
                alt="Grupo Requiez - Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/gruporequiez/"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={ig}
                alt="Grupo Requiez - Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/grupo-requiez/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={li}
                alt="Grupo Requiez - Linkedin"
              />
            </a>
            <a
              href="https://www.tiktok.com/@gruporequiez"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={tt}
                alt="Grupo Requiez - Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="div">
          <p>Suscríbete al newsletter</p>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              required
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
            />
            <input
              name="email"
              required
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input type="submit" value="Enviar" className="newsletter-button" />
            <Alert
              style={{ display: open ? "" : "none" }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Registro correcto
            </Alert>
          </form>
        </div>
      </div>
    </footer>
  );
}
