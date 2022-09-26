import React from "react";

import "./Whatsapp.css";

export default function Whatsapp() {
  return (
    <div className="SsbContainer">
      <div id="ssb-container" className="ssb-btns-right ssb-anim-slide">
        <ul className="ssb-dark-hover">
          <li id="ssb-btn-0">
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=523338337788&amp;text=Hola,%20quisiera%20hablar%20con%20un%20asesor."
                rel="noreferrer"
                target="_blank"
              >
                <span className="fab fa-whatsapp">
                  <img src="/images/whatsapp.svg" alt="Whastapp" />{" "}
                </span>{" "}
                Whatsapp
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
