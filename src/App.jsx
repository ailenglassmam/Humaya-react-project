import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'flowbite'
import Navbar from './componentes/Navbar'
import Home from './paginas/Home'
import Nosotros from './paginas/Nosotros'
import Productos from './paginas/Productos'
import Locales from './paginas/Locales'
import Recetas from './paginas/Recetas'
import Contacto from './paginas/Contacto'
import Footer from './componentes/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/productos' element={<Productos />}></Route>
          <Route path='/locales' element={<Locales />}></Route>
          <Route path='/recetas' element={<Recetas />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
      </ BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
