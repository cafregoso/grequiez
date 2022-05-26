import React from "react";

import "./SpaceRight.css";

export default function SpaceRight({ name, image, info, color }) {
  return (
    <div className="space_right">
      <div className="space-container_right">
        <div className="space-text_right">
          <div>
            <h3 className="container-h3_right">{ name.toUpperCase() }<hr className="container-hr_rigt"/></h3>
            
            <p
              className="container-pgh_right"
            >
              {info}
            </p>
          </div>
        </div>
        <div className="space-image_right">
          <img src={image} alt={`Grupo Requiez - ${name}`} />
        </div>
      </div>
    </div>
  );
}
 