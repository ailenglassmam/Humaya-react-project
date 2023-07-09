import React from 'react'
import listaRecetas from '../Recetas'

export default function CardReceta() {
  const recetario = listaRecetas.map(receta => {
    return (
      <div className='xl:w-1/3 md:w-1/2 w-full md:px-4 py-4 product' key={receta.id}>
        <div className='border-2 border-[#554D41] border-opacity-60 rounded-lg overflow-hidden'>
          <img className='lg:h-48 h-48 w-full object-cover object-center' src={receta.image} alt={receta.titulo} />
          <div className='p-6'>
            <h3 className='tracking-widest text-[#2A2620] dark:text-[#AFA698] text-xs font-bold title-font uppercase'>{receta.categoria}</h3>
            <h2 className='text-lg text-gray-900 dark:text-white mb-4 md:text-xl font-bold title-font leading-tight'>{receta.titulo}</h2>
            <p className='leading-tight text-base dark:text-gray-400'>{receta.descripcion}</p>
            <a href={receta.link} className='flex-shrink-0 text-white inline-flex bg-[#8D806C] border-0 py-2 px-6 focus:outline-none hover:bg-[#554D41] rounded md:text-xl font-bold mt-4 btn-info' target='_blank'>Ver receta</a>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='flex flex-wrap justify-center'>
      {recetario}
    </div>
  )
}
