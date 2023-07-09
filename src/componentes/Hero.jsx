import React from 'react'
import Logo from '../assets/images/HsinDulce100x100.png'

export default function Hero() {
  return (
    <section id='inicio'>
      <div className='mx-auto flex px-5 py-24 items-center justify-center flex-col min-h-screen'>
        <img className='mb-10 object-cover object-center rounded' alt='Logo Dulces Humaya' src={Logo} />
        <div className='text-center lg:w-2/3 w-full text-white'>
          <h1 className='title-font md:text-[3rem] text-2xl mb-4 font-bold'>Bienvenidos a Dulces Humaya</h1>
          <p className='mb-8 leading-tight md:text-xl'>Donde la tradición y el sabor se entrelazan en cada bocado.<br /> Desde hace medio siglo, nos enorgullece llevar la autenticidad y la dulzura de Argentina a tus manos.</p>
          <div className='flex justify-center'>
            <a href='/productos' className='flex-shrink-0 text-white ml-4 inline-flex bg-[#8D806C] border-0 py-2 px-6 focus:outline-none hover:bg-[#554D41] rounded md:text-xl font-bold'>Conocenos</a>
            <a href='/contacto' className='ml-4 inline-flex text-[#554D41] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded md:text-xl font-bold'>Contactanos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
