import React from 'react'
import CardReceta from '../componentes/CardReceta'

export default function Recetas() {
  return (
    <section className='text-gray-600 body-font container px-5 py-24 md:py-36 mx-auto'>
      <div className='lg:w-1/2 w-full lg:mb-0'>
        <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Recetas</h2>
        <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
      </div>
      <p className='mb-8 leading-tight md:text-xl'>Te invitamos a descubrir una amplia variedad de deliciosas y sorprendentes recetas que incorporan nuestros dulces artesanales como ingrediente principal. Desde postres clásicos con un toque dulce de leche hasta creaciones innovadoras que realzan el sabor único de nuestros dulces, estas recetas han sido cuidadosamente seleccionadas y probadas para inspirarte a darle un giro dulce a tu cocina. </p>
      <CardReceta />
    </section>
  )
}
