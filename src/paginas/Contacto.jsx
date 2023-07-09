import React from 'react'

export default function Contacto() {
  return (
    <section className='text-gray-600 body-font container px-5 py-24 md:py-36 mx-auto'>
      <div className='lg:w-1/2 w-full lg:mb-0'>
        <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white md:w-5/6 leading-tight title-font'>Conéctate con Nosotros</h2>
        <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
      </div>
      <p className='mb-8 leading-tight md:text-xl'>Estamos aquí para responder todas tus consultas y escuchar tus comentarios. Si tienes alguna pregunta, sugerencia o simplemente quieres compartir tu amor por nuestros dulces, no dudes en ponerte en contacto con nuestro equipo.</p>
      <div className='lg:w-1/2 md:w-2/3 mx-auto my-24'>
        <div className='flex flex-wrap -m-2'>
          <div className='p-2 w-1/2'>
            <div className='relative'>
              <label for='name' className='leading-7 text-sm text-gray-600'>Nombre</label>
              <input type='text' id='nombre' name='nombre' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
          </div>
          <div className='p-2 w-1/2'>
            <div className='relative'>
              <label for='email' className='leading-7 text-sm text-gray-600'>Mail</label>
              <input type='email' id='email' name='email' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
          </div>
          <div className='p-2 w-full'>
            <div className='relative'>
              <label for='mensaje' className='leading-7 text-sm text-gray-600'>Mensaje</label>
              <textarea id='mensaje' name='mensaje' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
            </div>
          </div>
          <div className='p-2 w-full'>
            <button className='flex mx-auto text-white bg-[#8D806C] py-2 px-6 focus:outline-none hover:bg-[#554D41] rounded text-xl font-bold'>Enviar</button>
          </div>
          <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
            <a className='text-[#2A2620] dark:text-[#AFA698]' href='mailto:info@dulceshumaya.com'>info@dulceshumaya.com</a>
            <p className='leading-normal my-5'>Dirección de la Sede Central:
              <br />Calle Dulce Tradición 456 <br />Ciudad Autónoma de Buenos Aires, Argentina
            </p>
            <span className='inline-flex'>
              <a className='text-[#554D41]'>
                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>
              <a className='ml-4 text-[#554D41]'>
                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
