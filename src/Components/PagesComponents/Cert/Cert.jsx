import React from 'react'

import './Cert.css'

export default function Cert({ image, name, info, title }) {
  return (
    <div className='cert-container'>
        { image && <img src={ image } alt={ `Grupo Requiez - Certificado ${ name }` }/>}
        { title && <h2>{ title }</h2>}
        <div>
            <hr className="container-hr_rigt"/>
            <p>
                { info }
            </p>
        </div>
    </div>
  )
}
