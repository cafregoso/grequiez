import React from 'react'
import Banner from '../../PagesComponents/Banner/Banner'
import Space from '../../PagesComponents/Space/Space'
import InfoCard from '../../PagesComponents/InfoCard/InfoCard'

import banner from '../../../assets/banner.webp'
import imageMision from '../../../assets/re.webp'

import './Home.css'
import brands from '../../../brands.json'
import TextBox from '../../PagesComponents/TextBox/TextBox'

export default function Home() {
  return (
    <div className='home-container'>
      <Banner img={ banner } />
      <TextBox
        text1='Somos un grupo de cinco marcas con soluciones mobiliariaspara proyectos de oficina, contract y hospitality.'
        text2='Cada una cuenta con una esencia y personalidad propia, ofreciendo una extensa gama de acabados y colores que nos mantienen en tendencia.'
        color='var(--color-verdeoscuro)'
        colorletter='#FFF'
      />
      <Space 
        name='MISIÓN'
        image={ imageMision }
        info='Fabricar y proveer muebles para oficina,
          contract y colectividad, proporcionando
          a nuestros clientes productos y servicios
          de calidad e innovación, generando
          beneficios consistentes, basados en la
          creatividad, el compromiso y la integración
          del personal, todo ello por medio de la
          tecnología y capacitación de vanguardia.'
        color='#FFF'
      />
      <h2 className='home-container_subtitle' id='brands'>NUESTRAS MARCAS</h2>
      <div className='home-container_brands'>
        {
          brands.map(({ id, img, desc }) => {
            return (
              <InfoCard key={ id } image={ img } info={ desc } />
            )
          })
        }
      </div>
    </div>
  )
}
