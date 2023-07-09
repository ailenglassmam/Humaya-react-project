import React from 'react'

export default function CtaConocenos() {
  return (
    <section className='text-black dark:text-white body-font container px-5 py-24 mx-auto'>
      <div className='flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
        <div>
          <h4 className='md:text-md text-sm text-[#2A2620] dark:text-[#AFA698] tracking-widest font-bold title-font uppercase'>¡Descubre el sabor auténtico de Argentina!</h4>
          <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Explora nuestra deliciosa selección de dulces argentinos y déjate tentar por su increíble sabor</h2>
          <p className='my-8 leading-tight md:text-xl'>¡Haz clic aquí para ver nuestros productos!</p>
        </div>
        <a href='/productos' className='flex-shrink-0 text-white ml-4 inline-flex bg-[#8D806C] border-0 py-2 px-6 focus:outline-none hover:bg-[#554D41] rounded md:text-xl font-bold'>Ver Más</a>
      </div>
    </section>
  )
}
