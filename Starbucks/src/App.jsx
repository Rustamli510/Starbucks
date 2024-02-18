import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

function App() {
  
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App