import React from 'react'
import Banner from '../../PagesComponents/Banner/Banner'
import Space from '../../PagesComponents/Space/Space'
import InfoCard from '../../PagesComponents/InfoCard/InfoCard'

import banner from '../../../assets/banner.webp'
import imageMision from '../../../assets/mision.webp'

import './Home.css'
import brands from '../../../brands.json'
import TextBox from '../../PagesComponents/TextBox/TextBox'

export default function Home() {
  return (
    <div>
      <Banner img={ banner } />
      <div className='home-container'>
        <TextBox
          text1='Mejoramos cualquier espacio a través del mobiliario, despertando la creatividad e inspirando a los usuarios a través del confort, la ergonomía y el diseño.'
          color='var(--color-verdeoscuro)'
          colorletter='#FFF'
        />
        <Space 
          image={ imageMision }
          info='Somos un grupo que brindamos soluciones en mobiliario para espacios de oficina, contract y hospitality. Cada una de nuestras marcas cuenta con una esencia y personalidad propia.'
          info2='Contamos con exclusividad de socios comerciales internacionales y más de 250 distribuidores en toda la república mexicana. El catálogo de Grupo Requiez es el más extenso del país, con propuestas en tecnología y diseño para corresponder a la necesidad de los distintos usuarios.'
          color='var(--color-beige)'
        />
        <h2 className='home-container_subtitle' id='brands'>NUESTRAS MARCAS</h2>
        <div className='home-container_brands'>
          {
            brands.map(({ id, logo, img, desc, link }) => {
              return (
                <InfoCard key={ id } logo={ logo } image={ img } info={ desc } link={ link } />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
