import { useState } from 'react'
import './App.css'

// import layout
import NavBar from './components/NavBar'

// import components pages
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'

// product list under hero
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <ProductList/>
      <About/>
      <Gallery/>
    </>
  )
}

export default App
