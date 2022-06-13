import React from 'react'

import './InfoCard.css'

export default function InfoCard({ image, info, logo }) {
  return (
    <div className='info-container'>
      <div className='info-container_img'>
        <img src={ image } alt='Grupo Requiez - Marcas - Forniture' />
        <img src={ logo } alt='Grupo Requiez - Logo - Marcas - Forniture' />
      </div>
      <p className='info-container_text'>
        { info }
      </p>
    </div>
  )
}
