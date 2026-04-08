import { useState } from 'react'
import './App.css'

// import layout
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'

// product list under hero
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <ProductList/>
      <About/>
    </>
  )
}

export default App
