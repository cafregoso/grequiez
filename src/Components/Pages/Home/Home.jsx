import React from 'react'
import Banner from '../../PagesComponents/Banner/Banner'
import Space from '../../PagesComponents/Space/Space'
import InfoCard from '../../PagesComponents/InfoCard/InfoCard'

import banner from '../../../assets/banner.webp'
import imageMision from '../../../assets/re.webp'

import './Home.css'
import brands from '../../../brands.json'

export default function Home() {
  return (
    <div className='home-container'>
      <Banner img={ banner } />
      <div className='text-box'>
        <p className='text-box_p'>Somos un grupo de cinco marcas con soluciones mobiliarias <br />para proyectos de oficina, contract y hospitality.</p>
        <p className='text-box_p'>Cada una cuenta con una esencia <br />y personalidad propia, ofreciendo una extensa gama de <br />acabados y colores que nos mantienen en tendencia.</p>
        <hr className='text-box_hr' />
      </div>
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
      <h2 className='home-container_subtitle'>NUESTRAS MARCAS</h2>
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
