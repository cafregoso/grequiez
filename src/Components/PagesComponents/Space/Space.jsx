import React from "react";

import "./Space.css";

export default function Space({ name, image, info, color }) {
  return (
    <div className="space">
      <div className="space-container">
        <div className="space-image">
          <img src={image} alt='Grupo Requiez - Mision' />
        </div>
        <div className="space-text" style={{ backgroundColor: '#EEE' }}>
          <div>
            <h3 className="container-h3">{ name }</h3>
            <p
              className="container-pgh"
            >
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
