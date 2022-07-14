import React from "react";
import TimeLine from "../../PagesComponents/TimeLine/TimeLine";

import "react-vertical-timeline-component/style.min.css";
import './History.css'

export default function History() {
  return (
    <div className="history-container">
      <section className="history-hero">
        <h2>NUESTRA <br/> HISTORIA</h2>
        <h3>NOS ABRE CAMINO</h3>
      </section>
      <TimeLine />
    </div>
  );
}
