import React from 'react'
import propiedadesData from '../Propiedades'
import Carrousel from './Carrousel'

export default function Propiedades() {
  const propiedades = propiedadesData.map(propiedad => {
    return (
      <div className='py-8 lg:w-1/3' key={propiedad.id}>
        <div className='flex rounded-lg h-full bg-transparent flex-col'>
          <div className='flex items-center mb-3'>
            <div
              className='w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-[#8D806C] p-2'>
              <img src={propiedad.icon} fill='red' alt={propiedad.title} />
            </div>
            <h5 className='text-gray-900 dark:text-white text-xl title-font font-bold'>{propiedad.title}</h5>
          </div>
          <div className='flex-grow'>
            <p className='leading-snug md:text-lg dark:text-gray-400'>{propiedad.description}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className='text-gray-600 body-font min-h-screen'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h4 className='md:text-md text-sm text-[#2A2620] dark:text-[#AFA698] tracking-widest font-bold title-font uppercase'>La mejor calidad para vos</h4>
          <h2 className='md:text-3xl text-2xl leading-tight title-font text-gray-900 dark:text-white font-bold'>Características que nos diferencian del resto</h2>
        </div>
        {/* listado de propiedades */}
        <div className='flex flex-wrap'>
          {propiedades}
        </div>
      </div>
      {/* carrousel fotos productos */}
      <Carrousel/>
    </section>
  )
}
