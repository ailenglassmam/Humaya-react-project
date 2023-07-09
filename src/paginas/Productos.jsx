import React from 'react'
import CardProducto from '../componentes/CardProducto'
import CtaProductos from '../componentes/CtaProductos'

export default function Productos() {
  return (
    <section className=' text-gray-600 body-font container px-5 py-24 md:py-36 mx-auto'>
      <div className='lg:w-1/2 w-full lg:mb-0'>
        <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Productos
        </h2>
        <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
      </div>
      <p className='mb-8 leading-tight md:text-xl'>Sumérgete en un mundo de sabores irresistibles con nuestra amplia variedad de productos artesanales. En nuestra empresa, nos enorgullece ofrecer una selección única de dulces que deleitarán tus sentidos y te transportarán a la esencia misma de la tradición argentina.</p>
      <CardProducto></CardProducto>
      <CtaProductos></CtaProductos>
    </section>
  )
}
