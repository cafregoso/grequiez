import React from 'react'

export default function Brand({ img, logo, brand, text }) {
  return (
    <div>
      <img src={ img } alt='Grupo Requiez - Certificados' />
      <img src={ logo } alt={`Grupo Requiez - Logo - ${brand}`} />
      <p>
        { text }
      </p>
    </div>
  )
}
