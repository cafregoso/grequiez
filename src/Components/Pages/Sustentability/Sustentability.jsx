import React from 'react'

import Banner from '../../PagesComponents/Banner/Banner'
import TextBox from '../../PagesComponents/TextBox/TextBox'

import banner from '../../../assets/banner.webp'

import './Sustentability.css'

export default function Sustentability() {
  return (
    <div className='sustentability-container'>
      <Banner img={ banner } />
      <TextBox 
        text1='Durante más de 35 años en el mercado hemos
        logrado distinciones de calidad, de alto nivel.'
        text2='Esto nos motiva a seguir siendo una marca
        competitiva a nivel nacional.'
        color='#FFF'
        colorletter='#000'
      />
    </div>
  )
}
