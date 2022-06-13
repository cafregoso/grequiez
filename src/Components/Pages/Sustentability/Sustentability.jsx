import React from 'react'

import Banner from '../../PagesComponents/Banner/Banner'
import TextBox from '../../PagesComponents/TextBox/TextBox'
import Cert from '../../PagesComponents/Cert/Cert'
import SpaceRight from '../../PagesComponents/SpaceRightS/SpaceRight'

import banner from '../../../assets/sustentability/banner.webp'
import product from '../../../assets/sustentability/productos_sustentables.webp'
import silla from '../../../assets/sustentability/silla_eco.webp'

import certs from '../../../certs.json'

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

      <section className='section-cert'>
        {
          certs.map(({ name, image, info }) => (
            <Cert
              key={ name }
              name={ name }
              image={ image }
              info={ info }
            />
          ))
        }
      </section>
      <SpaceRight
        name={ 'Productos Sustentables' }
        image={ product }
        info={ 'Cuando adquieres productos en Grupo Requiez, también estas contribuyendo al cuidado del medio ambiente.' }
      />
      <section className='section-info-p'>
        <div className='section-info-p_left'>
          <p>Ayudas a crear un mundo más justo y sostenible.</p>
          <p>
            Evitas la deforestación, porque un % de nuestros
            productos se certifican con la FSC (Forest
            Stewardship Council o Consejo de administración
            Forestal).
          </p>
          <p>
            Ayudas a que tu hogar sea más saludable y
            armonioso, debido a que estás desplazando
            elementos que son nocivos para la salud, al usar
            tapicería y textiles que son de plantaciones
            ecológicas sin tratamientos químicos además de
            ser 100% reciclables y reciclados.
          </p>
        </div>
        <div className='section-info-p_right'>
          <p>
            Adquieres un producto con fabricación inofensiva por
            sus materiales reciclados, que reducen las emisiones de
            CO2, favoreciendo la conservación del medio ambiente.
          </p>
          <p>
            Favoreces el reciclaje y la reutilización de materiales
            brindando una segunda vida al producto.
          </p>
          <p>
            Cuentas con la oportunidad de ver la variedad de
            productos con los que contamos, además de adquirir
            diseños diferentes, colores y estilos tanto tradicionales
            como innovadores.
          </p>
          <p>
            Adquieres un producto versátil y adaptable a ambientes
            exteriores e interiores, debido a su alta resistencia y
            soporte a las inclemencias del tiempo.
          </p>
        </div>
      </section>
    </div>
  )
}
