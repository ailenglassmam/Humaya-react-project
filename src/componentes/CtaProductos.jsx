import React from 'react'

export default function CtaProductos() {
  return (
    <section className='text-black dark:text-white body-font container px-5 py-24 mx-auto'>
      <div className='flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
        <div>
          <h4 className='md:text-md text-sm text-[#2A2620] dark:text-[#AFA698] tracking-widest font-bold title-font uppercase'>Visita nuestros encantadores locales</h4>
          <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Dejate seducir por los deliciosos aromas y los sabores irresistibles que llenan el aire en cada uno de nuestros espacios.</h2>
          <p className='my-8 leading-tight md:text-xl'>¡Te esperamos con los brazos abiertos en nuestros dulces rincones!</p>
        </div>
        <a href='/locales' className='flex-shrink-0 text-white ml-4 inline-flex bg-[#8D806C] border-0 py-2 px-6 focus:outline-none hover:bg-[#554D41] rounded md:text-xl font-bold'>Ver Más</a>
      </div>
    </section>
  )
}
