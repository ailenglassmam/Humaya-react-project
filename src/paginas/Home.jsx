import React from 'react'
import Hero from '../componentes/Hero'
import Propiedades from '../componentes/Propiedades'
import CtaConocenos from '../componentes/CtaConocenos'
import Testimoniales from '../componentes/Testimonios'

export default function Home() {
  return (
    <main>
      <Hero />
      <Propiedades />
      <CtaConocenos />
      <Testimoniales />
    </main>
  )
}
