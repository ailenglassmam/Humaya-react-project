import React from 'react'
import CardLocal from '../componentes/CardLocal'
import Clientes from '../componentes/Clientes'


export default function Locales() {
  return (
    <section className=' text-gray-600 body-font container px-5 py-24 md:py-36 mx-auto'>
      <div className='lg:w-1/2 w-full lg:mb-0'>
        <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Locales</h2>
        <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
      </div>
      <p className='mb-8 leading-tight md:text-xl'>Descubre el encanto de nuestros locales, cada uno con su propia personalidad y ambiente distintivo. Sumérgete en una experiencia única mientras exploras nuestros espacios cuidadosamente diseñados, que reflejan la esencia de la tradición y la pasión por los dulces argentinos.</p>
      <CardLocal></CardLocal>
      <Clientes></Clientes>
    </section>
  )
}
