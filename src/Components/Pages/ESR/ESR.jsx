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
          con el objetivo de mejorar la calidad de vida las personas
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
          info='Programa con enfoque al personal interno de Grupo Requiez,
          con el objetivo de promover y gestionar el bienestar
          emocional y físico de los colaboradores.
          Se trata de una revisión mes a mes con la asistencia de
          un profesional de la salud de los signos básicos; toma de
          glucosa, presión arterial, control de peso, así mismo la
          implementación de actividades para promover la actividad
          física de acuerdo con sus espacios y tiempos disponibles,
          compartiendo tips de alimentación y actividad
          física básica para la creación de un hábito.'
          color='#FFF'
        />
      </div>
    </div>
  )
}
