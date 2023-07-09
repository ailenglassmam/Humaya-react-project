import React from 'react'
import Numeros from '../componentes/Numeros'
import campoFrutal from '../assets/images/pastafroladedulcedeleche.jpg'
import JuanaMartinez from '../assets/images/abuelo.jpg'

export default function Nosotros() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <div className='container mx-auto'>
          <div className='rounded-lg h-64 overflow-hidden'>
            <img alt='content' className='object-cover object-center h-full w-full' src={campoFrutal} />
          </div>
          <div className='flex flex-col sm:flex-row mt-10'>
            <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
              <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                <img alt='Juana Martínez creador de Dulces Humaya' className='object-cover object-center h-full w-full rounded-full' src={JuanaMartinez} />
              </div>
              <div className='flex flex-col items-center text-center justify-center'>
                <h3 className='font-medium title-font mt-4 text-gray-900 text-lg'>Juana Martínez</h3>
                <div className='my-4 h-1 w-20 bg-[#AFA698] rounded'></div>
                <p className='mb-8 leading-tight md:text-xl'>Guiada por su amor por los dulces y su deseo de compartir su talento con el mundo, Juana Martínez sentó los cimientos de lo que hoy es nuestra querida empresa familiar artesanal.</p>
              </div>
            </div>
            <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
              <p className='leading-relaxed text-lg'>Desde sus modestos inicios en el hogar de una familia apasionada por los dulces, nuestra empresa familiar artesanal ha forjado su camino hacia la excelencia en la industria. Hace décadas, nuestra abuela, con su amor por la tradición y su habilidad innata para crear dulces irresistibles, sentó las bases de lo que hoy es nuestro amado negocio. A lo largo de los años, hemos conservado cuidadosamente las recetas tradicionales transmitidas de generación en generación, asegurando que cada dulce lleve consigo el auténtico sabor y la esencia de nuestra historia familiar. Nuestra empresa ha crecido, pero nunca hemos perdido de vista nuestras raíces y la pasión que nos impulsó desde el principio. Cada dulce que producimos es un tributo a nuestra historia y un recordatorio constante de nuestro compromiso con la excelencia y la tradición artesanal.</p>
            </div>
          </div>
          <div className='pt-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-20'>
              <h4 className='md:text-md text-sm text-[#2A2620] dark:text-[#AFA698] tracking-widest font-bold title-font uppercase'>Visión</h4>
              <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white leading-tight title-font pb-4'>Dulzura sin límites, excelencia sin igual</h2>
              <p className='mb-8 leading-tight md:text-xl'>Nuestra visión es ser reconocidos como líderes en la producción de dulces artesanales, llevando alegría y satisfacción a cada paladar. Nos esforzamos por mantener vivas las recetas y técnicas tradicionales que nos han sido legadas, al tiempo que buscamos constantemente la innovación y la mejora en nuestras creaciones dulces. Aspiramos a ser reconocidos como un referente de calidad, autenticidad y deleite en la industria de los dulces, ofreciendo a nuestros clientes una experiencia única que celebra la dulzura y la tradición.</p>
            </div>
          </div>
          <div className='pt-8 mx-auto'>
            <div className='flex flex-col text-center w-full mb-20'>
              <h4 className='md:text-md text-sm text-[#2A2620] dark:text-[#AFA698] tracking-widest font-bold title-font uppercase'>Misión</h4>
              <h2 className='md:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white leading-tight title-font pb-4'>Endulzar momentos, preservar tradiciones</h2>
              <p className='mb-8 leading-tight md:text-xl'>Nuestra misión es crear dulces artesanales de la más alta calidad, utilizando ingredientes cuidadosamente seleccionados y procesos de producción meticulosos. Nos dedicamos a ofrecer dulces que superen las expectativas de nuestros clientes en términos de sabor, frescura y autenticidad. Buscamos constantemente la excelencia en cada dulce que elaboramos, manteniendo un compromiso inquebrantable con la calidad, la innovación y el respeto por la tradición. Nuestra misión es deleitar los paladares más exigentes y llevar momentos dulces de felicidad a la vida de las personas, preservando la esencia de la artesanía familiar que nos define.</p>
            </div>
          </div>
        </div>
      </div>
      <Numeros></Numeros>
    </section>
  )
}
