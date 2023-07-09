import React from 'react'
import Logo from '../assets/images/HsinDulce100x100.png'

export default function Navbar() {
  return (
    <header>
      <nav className='bg-white dark:bg-[#0C0701] px-2 sm:px-4 py-2.5 fixed w-full z-50'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          {/* logo */}
          <a href='/' className='flex items-center'>
            <img src={Logo} className='h-6 mr-3 sm:h-9 ' alt='Logo Dulces Humaya' />
          </a>
          {/* menu hamburguesa */}
          <div className='flex items-center md:order-2'>

            <button data-collapse-toggle='mobile-menu-2' type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#706353] dark:focus:ring-[#A9A39B]'
              aria-controls='mobile-menu-2' aria-expanded='false'>
              <span className='sr-only'>Abrir menu principal</span>
              <svg className='w-6 h-6' aria-hidden='true' fill='#A9A39B' viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'></path>
              </svg>
            </button>
          </div>
          {/* menu hamburguesa */}
          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='mobile-menu-2'>
            <ul
              className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-[#0C0701] md:dark:bg-[#0C0701] dark:border-[#706353]'>
              <li>
                <a href='/nosotros' className='block py-2 pl-3 pr-4 text-gray-600 hover:text-[#2A2620] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-[#8D806C] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'>Nosotros</a>
              </li>
              <li>
                <a href='/productos' className='block py-2 pl-3 pr-4 text-gray-600 hover:text-[#2A2620] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-[#8D806C] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'>Productos</a>
              </li>
              <li>
                <a href='/locales' className='block py-2 pl-3 pr-4 text-gray-600 hover:text-[#2A2620] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-[#8D806C] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'>Locales</a>
              </li>
              <li>
                <a href='/recetas' className='block py-2 pl-3 pr-4 text-gray-600 hover:text-[#2A2620] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-[#8D806C] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'>Recetas</a>
              </li>
              <li>
                <a href='/contacto' className='block py-2 pl-3 pr-4 text-gray-600 hover:text-[#2A2620] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-[#8D806C] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
