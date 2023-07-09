import React from 'react';
import fabrica1 from '../assets/images/fabrica1.jpg';
import fabrica2 from '../assets/images/fabrica2.jpg';
import fabrica3 from '../assets/images/fabrica3.jpg';
import fabrica4 from '../assets/images/fabrica4.jpg';
import fabrica5 from '../assets/images/fabrica5.jpg';
import fabrica6 from '../assets/images/fabrica6.jpg';

export default function Carrousel() {

  return (
    <div className='container px-5 py-24 mx-auto flex flex-wrap'>
      <div className='flex flex-wrap md:-m-2 -m-1'>
        <div className='flex flex-wrap w-1/2'>
          <div className='md:p-2 p-1 w-1/2'>
            <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={fabrica1} />
          </div>
          <div className='md:p-2 p-1 w-1/2'>
            <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={fabrica2} />
          </div>
          <div className='md:p-2 p-1 w-full'>
            <img alt='gallery' className='w-full h-full object-cover object-center block rounded-lg' src={fabrica3} />
          </div>
        </div>
        <div className='flex flex-wrap w-1/2'>
          <div className='md:p-2 p-1 w-full'>
            <img alt='gallery' className='w-full h-full object-cover object-center block rounded-lg' src={fabrica4} />
          </div>
          <div className='md:p-2 p-1 w-1/2'>
            <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={fabrica5} />
          </div>
          <div className='md:p-2 p-1 w-1/2'>
            <img alt='gallery' className='w-full object-cover h-full object-center block rounded-lg' src={fabrica6} />
          </div>
        </div>
      </div>
    </div>
  )
}
