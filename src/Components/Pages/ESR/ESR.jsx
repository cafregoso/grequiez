import React from 'react'
import Banner from '../../PagesComponents/Banner/Banner'
import SpaceRight from '../../PagesComponents/SpaceRight/SpaceRight'
import Space from '../../PagesComponents/Space/Space'

import banner from '../../../assets/esr/banner_RS.webp'
import causas from '../../../assets/esr/esr_causas.webp'
import lazos from '../../../assets/esr/lazos.webp'
import healthy from '../../../assets/esr/healthy_life.webp'

import './ESR.css'

export default function ESR() {
  return (
    <div>
      <Banner img={ banner } />
      <div className='esr-container'>
        <SpaceRight
          name='Causas Sociales'
          image={ causas }
          info='Grupo Requiez colabora activamente en causas sociales
          con el objetivo de mejorar la calidad de vida de las personas
          que lo necesitan, como por ejemplo terapias para
          niños en el CRIT de Teletón.'
          color='#FFF'
        />
        <Space
          name='Lazos'
          image={lazos}
          info='Alianza con Fundación Lazos por más de 5 años, con el
          apadrinamiento de 35 niños que gozan a través de este
          proyecto de una calidad educativa con un sentido de
          pertenencia enfocado en valores y en crecimiento profesional.'
        />
        <SpaceRight
          name='Healthy Life'
          image={ healthy }
          info='Este programa tiene el objetivo de promover y gestionar 
          el bienestar emocional y físico de los colaboradores. 
          Se promueven buenos hábitos de salud como la actividad física 
          y una buena alimentación, además de estar al cuidado de la 
          presión arterial, glucosa, vacunas y exámenes de la vista.'
          color='#FFF'
        />
      </div>
    </div>
  )
}
