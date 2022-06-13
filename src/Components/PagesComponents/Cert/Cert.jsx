import React from 'react'

import './Cert.css'

export default function Cert({ image, name, info }) {
  return (
    <div className='cert-container'>
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
