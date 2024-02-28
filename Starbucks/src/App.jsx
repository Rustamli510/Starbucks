import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Rewards from './Rewards'
import Giftcards from './Giftcards'
import Menu from './Menu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/giftcards' element={<Giftcards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App