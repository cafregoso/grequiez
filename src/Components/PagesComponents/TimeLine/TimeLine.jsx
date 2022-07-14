import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";

import _1985 from '../../../assets/timeline/1985.webp'
import _1990 from '../../../assets/timeline/1990.webp'
import _1999 from '../../../assets/timeline/1999.webp'
// import _2000 from '../../../assets/timeline/2000.webp'
import _2002 from '../../../assets/timeline/2002.webp'
import _2006 from '../../../assets/timeline/2006.webp'
import _2010 from '../../../assets/timeline/2010.webp'
import _2012 from '../../../assets/timeline/2012.webp'
import _2013 from '../../../assets/timeline/2013.webp'
import _2015 from '../../../assets/timeline/2015.webp'
import _2016 from '../../../assets/timeline/2016.webp'
import _2017 from '../../../assets/timeline/2017.webp'
import _2018 from '../../../assets/timeline/2018.webp'
import _2019 from '../../../assets/timeline/2019.webp'
import _2021 from '../../../assets/timeline/2021.webp'

export default function TimeLine() {
  return (
    <div className="timeline-container">
      <VerticalTimeline className="vertical" lineColor={"#000"}>
        <VerticalTimelineElement
          className=""
          date="1985"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Nace Grupo Requiez
                como una empresa
                dedicada a la distribución
                de productos para
                ingeniería y dibujo.
              </p>
            </div>
            <div className="image-square">
              <img src={_1985} alt='Grupo requiez - 1985' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1990"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se crea la división de
                sillería: “Reqüiez”,
                posicionándose como líder
                en el mercado.
              </p>
              <h3 className="vertical-timeline-element-title">REQUIEZ</h3>
            </div>
            <div className="image-square">
              <img src={_1990} alt='Grupo requiez - 1990' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="1999"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se inaugura la planta
                de Metal Mecánica.
              </p>
            </div>
            <div className="image-square">
              <img src={_1999} alt="Grupo Requiez - 1999" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2000"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p" style={{ textAlign: 'left' }}>
                Nueva planta Belenes
                Norte, Zapopan.
              </p>
            </div>
            <div className="image-square">
              {/* <img src={_2000} alt=" Grupo Requiez - 2000" /> */}
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2002"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Nace la marca Euroseat.
              </p>
            </div>
            <div className="image-square">
              <img src={_2002} alt="Grupo Requiez - 2002" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se introduce la marca
                Labenze.
              </p>
              <h3 className="vertical-timeline-element-title">LABENZE</h3>
            </div>
            <div className="image-square">
              <img src={_2006} alt="Grupo Requiez - 2006" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2010"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se integra la línea de
                pintura electroestática
                en la planta de <b>Metal
                Mecánica.</b>
              </p>
            </div>
            <div className="image-square">
              <img src={_2010} alt="Grupo Requiez - 2010" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Apertura de almacén
                en CDMX.
              </p>
            </div>
            <div className="image-square">
              <img src={_2012} alt="Grupo Requiez - 2012" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2013"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se incorpora línea de
                sillería japonesa
                <b>Okamura</b>
              </p>
              <h3 className="vertical-timeline-element-title">
                OKAMURA
              </h3>
            </div>
            <div className="image-square">
              <img src={_2013} alt="Grupo Requiez - 2013" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se suma <b>Infiniti</b>,
                marca italiana.
              </p>
              <h3 className="vertical-timeline-element-title">INFINITI</h3>
            </div>
            <div className="image-square">
              <img src={_2015} alt="Grupo Requiez - 2015" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2016"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Obtención del distintivo
                de Empresa Socialmente
                Responsable.<br /><br />
                Se activan oficinas
                administrativas en CDMX.
              </p>
            </div>
            <div className="image-square">
              <img src={_2016} alt="Grupo Requiez - 2016" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se aperturan nuevas instalaciones
                de corporativo en Urban Center
                Guadalajara y planta operativa en
                el centro logístico de <b>Acatlán</b>.
              </p>
            </div>
            <div className="image-square">
              <img src={_2017} alt="Grupo Requiez - 2017" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2018"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Fusión de marcas
                Euroseat y Labenze.
              </p>
            </div>
            <div className="image-square">
              <img src={_2018} alt="Grupo Requiez - 2018" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"left"}
        >
          <div className="container-info-time image-left">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Se integra la
                marca Interface.
              </p>
              <h3 className="vertical-timeline-element-title">INTERFACE</h3>
            </div>
            <div className="image-square">
              <img src={_2019} alt="Grupo Requiez - 2019" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          date="2021"
          dateClassName="datefont-personal"
          iconStyle={{ display: "none" }}
          position={"right"}
        >
          <div className="container-info-time">
            <div className="container-info">
              <p className="vertical-timeline-element-p">
                Nuevas instalaciones
                de corporativo en<br/>
                <b>Punto Sur</b>.
              </p>
            </div>
            <div className="image-square">
              <img src={_2021} alt="Grupo Requiez - 2021" />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
