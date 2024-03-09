import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <About/>
    <Pricing/>
    <Newsletter/>
    <Footer/>
    
    </>
  )
}

export default App
