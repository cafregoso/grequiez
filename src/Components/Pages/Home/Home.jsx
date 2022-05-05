import React from 'react'
import Banner from '../../PagesComponents/Banner/Banner'

import banner from '../../../assets/banner.webp'

import './Home.css'

export default function Home() {
  return (
    <div>
      <Banner img={ banner } />
      <div className='text-box'>
        <p className='text-box_p'>Somos un grupo de cinco marcas con soluciones mobiliarias <br />para proyectos de oficina, contract y hospitality.</p>
        <p className='text-box_p'>Cada una cuenta con una esencia <br />y personalidad propia, ofreciendo una extensa gama de <br />acabados y colores que nos mantienen en tendencia.</p>
        <hr className='text-box_hr' />
      </div>
    </div>
  )
}
