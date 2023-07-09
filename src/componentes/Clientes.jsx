import React from 'react'
import cliente1 from '../assets/images/cliente1.jpg'
import cliente2 from '../assets/images/cliente2.jpg'
import cliente3 from '../assets/images/cliente3.jpg'
import cliente4 from '../assets/images/cliente4.jpg'
import cliente5 from '../assets/images/cliente5.jpg'
import cliente6 from '../assets/images/cliente6.jpg'

export default function Clientes() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex w-full mb-20 flex-wrap'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>Desde los primeros bocados hasta las sonrisas de satisfacción</h1>
          <p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>Queremos compartir contigo la dulzura a través de los ojos de nuestros apreciados clientes. En nuestra galería de fotos, encontrarás una selección de imágenes capturadas por aquellos que han disfrutado de nuestros dulces y han querido inmortalizar esos momentos de deleite. </p>
        </div>
        <div className='flex flex-wrap md:-m-2 -m-1'>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-1/2'>
              <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={cliente1} />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={cliente5} />
            </div>
            <div className='md:p-2 p-1 w-full'>
              <img alt='gallery' className='w-full h-full object-cover object-center block rounded-lg' src={cliente3} />
            </div>
          </div>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-full'>
              <img alt='gallery' className='w-full h-full object-cover object-center block rounded-lg' src={cliente2} />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={cliente4} />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={cliente6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
