import React from 'react'
import Logo from '../assets/images/HsinDulce100x100.png'

export default function Footer() {
  return (
    <footer className='p-4 bg-white sm:p-6 dark:bg-[#0C0701]'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <a href='/' className='flex items-center'>
            <img src={Logo} className='h-8 mr-3' alt='Logo Dulces Humaya' />
          </a>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-[#120802] uppercase dark:text-white'>Recursos</h2>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/nosotros' className='hover:text-[#8D806C]'>Nosotros</a>
              </li>
              <li className='mb-4'>
                <a href='/productos' className='hover:text-[#8D806C]'>Productos</a>
              </li>
              <li className='mb-4'>
                <a href='/locales' className='hover:text-[#8D806C]'>Locales</a>
              </li>
              <li className='mb-4'>
                <a href='/recetas' className='hover:text-[#8D806C]'>Recetas</a>
              </li>
              <li className='mb-4'>
                <a href='/contacto' className='hover:text-[#8D806C]'>Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Redes</h2>
            <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
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
            </div>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-400 sm:mx-auto dark:border-[#433B32] lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-400 sm:text-center dark:text-gray-400 mx-auto'>© 2023 <a href='/'
          className='hover:underline'>Humaya</a>. Todos los derechos reservados.
        </span> <br />
        <span className='text-sm text-gray-400 sm:text-center dark:text-gray-400 mx-auto'>Codo a Codo React | Creación, diseño y diagramación por <a href='https://www.linkedin.com/in/ailenglassmam/' target='blank' className='hover:underline'>Ailén Glassmam</a>.
        </span>
      </div>
    </footer>
  )
}
