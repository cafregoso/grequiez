import React from "react";

import "./Space.css";

export default function Space({ name, image, info, info2, color }) {
  return (
    <div className="space" style={{ backgroundColor: color }}>
      <div className="space-container">
        <div className="space-image">
          <img src={image} alt={`Grupo Requiez - ${name}`} />
        </div>
        <div className="space-text">
          <div>
            { name && <h3 className="container-h3">{ name.toUpperCase() }<hr className="container-hr"/></h3>}
            <p
              className="container-pgh"
            >
              {info}
            </p>
            { info2 && <p className="container-pgh"><br/>{ info2 }</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
