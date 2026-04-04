import { useState } from 'react'
import './App.css'

// import layout
import NavBar from './components/NavBar'
import Hero from './components/Hero'

// product list under hero
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <ProductList/>
    </>
  )
}

export default App
