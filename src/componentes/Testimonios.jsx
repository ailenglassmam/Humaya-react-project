import React from 'react'
import testimoniales from '../Testimoniales'

export default function Testimonios() {
  const testimonios = testimoniales.map(testimonio => {
    return (
      <div className='lg:w-1/3 lg:mb-0 mt-24 p-4' key={testimonio.name}>
        <div className='h-full text-center'>
          <img alt='testimonial' className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block' src={testimonio.img} />
          <p className='leading-tight text-sm md:text-lg'><i>{testimonio.message}</i></p>
          <span className='inline-block h-1 w-10 rounded bg-[#AFA698] mt-6 mb-4'></span>
          <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>{testimonio.name}</h2>
          <p className='text-[#554D41] font-semibold'>{testimonio.location}</p>
        </div>
      </div>
    )
  })

  return (
    <section className='text-gray-600 body-font container px-5 py-24 mx-auto min-h-screen'>
      <div className='flex flex-wrap w-full mb-20'>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Lo que nuestros clientes dicen</h2>
          <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
        </div>
        <p className='mb-8 leading-tight md:text-xl'>En nuestra empresa familiar artesanal, valoramos profundamente las opiniones de nuestros apreciados clientes. Palabras cálidas y sinceras que reflejan la calidad, el sabor excepcional y la dedicación que ponemos en cada dulce que elaboramos. ¡Descubre por qué nuestros clientes están enamorados de nuestros productos!</p>
      </div>
      <div className='flex flex-wrap -m-4'>
        {testimonios}
      </div>
    </section>
  )
}
