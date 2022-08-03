import React from 'react'

import Banner from '../../PagesComponents/Banner/Banner'
import TextBox from '../../PagesComponents/TextBox/TextBox'
import Cert from '../../PagesComponents/Cert/Cert'
import SpaceRight from '../../PagesComponents/SpaceRightS/SpaceRight'

import banner from '../../../assets/sustentability/banner.webp'
import product from '../../../assets/sustentability/productos_sustentables.webp'
import silla from '../../../assets/sustentability/silla_eco.png'

import certs from '../../../certs.json'

import './Sustentability.css'

export default function Sustentability() {
  return (
    <div>
      <Banner img={ banner } />

      <div className='sustentability-container'>
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
            <p>
              Ayudas a crear un mundo más justo y sostenible,
              evitas la deforestación, porque un porcentaje de
              nuestros productos se certifican con la FSC (Forest
              Stewardship Council o Consejo de Administración
              Forestal).
              <br />
              <br />
              Ayudas a que tu hogar sea más saludable y
              armonioso, debido a que estas desplazando
              elementos que son nocivos para la salud, al usar
              tapicería y textiles que son de plantaciones
              ecológicas sin tratamientos químicos, además de
              ser 100% reciclables y reciclados, adquieres un
              producto con fabricación inofensiva por sus
              materiales, que reducen las emisiones de CO2,
              favoreciendo la conservación del medio ambiente.
            </p>
          </div>
          <div></div>
          <div className='section-info-p_right'>
            <p>
              Favoreces el reciclaje y la reutilización de materiales
              brindando una segunda vida al producto, cuentas con la
              oportunidad de ver la variedad de productos con los que
              contamos, además de adquirir diseños diferentes,
              variedad de colores y estilos tanto tradicionales como
              innovadores.
              <br />
              <br />
              La energía de la planta se obtiene a través de paneles solares, generando un ahorro por más de 25 años hasta el momento.
              <br />
              <br />
              Adquieres un producto versátil y adaptable a ambientes
              exteriores e interiores, debido a su alta resistencia y
              soporte a las inclemencias del tiempo.
            </p>
          </div>
        </section>

      </div>
      <section className='section-silla-eco'>
        <div className='silla-eco-text'>
          <div className='silla-eco-text_top'>
            <Cert
              title={'PIEL VS PLÁSTICO'}
              info={'Se pretende suplir el plástico que funciona como empaque de las estructuras de acero, aprovechando las mermas de piel que se obtienen después de los procesos de tapizado. Estas mermas de piel se utilizan en el traslado de producto de una de las planta de producción a otra, para finalizar su producción. Esto se convierte en un costo beneficio, por la eliminación de la compra de plástico y la reutilización de mermas de piel que serán usadas por mayor cantidad de veces.'}
            />
          </div>
          <div className='silla-eco-text_mid'>
            <Cert
              title={'PROCESO DE PINTURA'}
              info={'A través de los procesos de pintura que se llevan a cabo en estructuras de productos específicos que lo requieren y que son elaboradas por Grupo Requiez, como parte del acabado de los productos anteriormente se utilizaba el fosfato de zinc para el lavado de estructuras como parte de su tratamiento, esto hace que la pintura tenga mejor adherencia, mayor resistencia a la corrosión, evitar la formación de burbujas, pero era altamente contaminante en los residuos del agua que se usaba para esos enjuagues como parte del proceso. Después de análisis aplicados a las aguas residuales se decidió por los factores: reducción de costos en la compra de este químico, menor contaminación al medio ambiente y sobre todo en el mismo resultado obtenido.'}
            />
          </div>
          <div className='silla-eco-text_bot'>
            <Cert
              title={'PEGAMENTO BASE AGUA'}
              info={'Es implementado como el principal producto en los procesos de tapizado ya que son adhesivos adecuados para unir todo tipo de materiales porosos, debido a que se hace la unión de la tela y poliuretano evitando que se dañe la calidad de ambos materiales. A diferencia de los pegamentos industriales comunes, este no contamina, ya que es a base de agua.'}
            />
          </div>
        </div>
        <img src={ silla } alt="Grupo Requiez - Silla eco" />
      </section>
    </div>
  )
}
