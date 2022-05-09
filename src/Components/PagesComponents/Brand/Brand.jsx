import React from 'react'

export default function Brand({ img, logo, text }) {
  return (
    <div>
      <img src={ img } alt='Grupo Requiez - Silla' />
      <img src={ logo } alt='Grupo Requiez - Logo - Requiez Labenze Okamura Infiniti Quadrifoglio Interface' />
      <p>
        { text }
      </p>
    </div>
  )
}
