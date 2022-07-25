import React from "react";

import "./SpaceRight.css";

export default function SpaceRight({ name, image, info }) {
  return (
    <div className="space_rightS">
      <div className="space-container_rightS">
        <div className="space-text_rightS">
            <h3 className="container-h3_rightS">{ name.toUpperCase() }<hr className="container-hr_rigtS"/></h3>
            
            <p
              className="container-pgh_rightS"
            >
              {info}
            </p>
        </div>
        <div className="space-image_rightS">
          <img src={image} alt={`Grupo Requiez - ${name}`} />
        </div>
      </div>
    </div>
  );
}
 