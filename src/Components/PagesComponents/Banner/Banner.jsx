import React from "react";

import './Banner.css';

export default function Banner({ img }) {
  return (
    <div className="banner_container">
      <img className="banner__image" src={ img } alt="Grupo Requiez - Banner" />
    </div>
  );
}
