import { useState } from 'react'
import './App.css'

// import layout
import NavBar from './components/NavBar'

// import components pages
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Form from './components/Form'

// product list under hero
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <NavBar/>
      <div className="h-[70px]" /> {/* spacer */}
      <Hero/>
      <ProductList/>
      <About/>
      <Gallery/>
      <Reviews/>
      <Location/>
      <Form/>
    </>
  )
}

export default App
