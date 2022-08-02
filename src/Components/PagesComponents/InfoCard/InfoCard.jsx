import React from 'react'

import './InfoCard.css'

export default function InfoCard({ image, info, logo, link }) {
  return (
    <div className='info-container'>
      <a href={ link } rel='noreferrer' target='_blank' className='info-container_img'>
        <img src={ image } alt='Grupo Requiez - Marcas - Forniture' />
        <img src={ logo } alt='Grupo Requiez - Logo - Marcas - Forniture' />
      </a>
      <p className='info-container_text'>
        { info }
      </p>
    </div>
  )
}
