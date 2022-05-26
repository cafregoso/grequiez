import React from 'react'

export default function Cert({ image, name, info }) {
  return (
    <div>
        <img src={ image } alt={ `Grupo Requiez - Certificado ${ name }` }/>
        <div>
            <hr className="container-hr_rigt"/>
            <p>
                { info }
            </p>
        </div>
    </div>
  )
}
