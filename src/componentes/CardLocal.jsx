import React from 'react'
import listaLocales from '../Locales'

export default function CardLocal() {
  const locales = listaLocales.map(local => {
    return (
      <div className='xl:w-1/3 md:w-1/2 w-full md:px-4 py-4 product' keu={local.id}>
        <div className='border-2 border-[#554D41] border-opacity-60 rounded-lg overflow-hidden'>
          <img className='lg:h-48 h-48 w-full object-cover object-center' src={local.img} alt={local.localidad} />
          <div className='p-6'>
            <h3 className='tracking-widest text-[#2A2620] dark:text-[#AFA698] text-xs font-bold title-font uppercase'>{local.categoria}</h3>
            <h2 className='text-lg text-gray-900 dark:text-white mb-4 md:text-xl font-bold title-font leading-tight'>{local.localidad}</h2>
            <p className='leading-tight text-base dark:text-gray-400'>{local.direccion}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='flex flex-wrap justify-center'>
      {locales}
    </div>
  )
}
