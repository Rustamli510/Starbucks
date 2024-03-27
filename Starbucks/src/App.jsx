import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Rewards from './Rewards'
import Giftcards from './Giftcards'
import Menu from './Menu'
import Company from './Company'
import Coffee from './Coffee'
import People from './People'
import Planet from './Planet'
import Customer from './Customer'

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
          <Route path='/our-company' element={<Company />} />
          <Route path='/our-coffee' element={<Coffee />} />
          <Route path='/people' element={<People />} />
          <Route path='/planet' element={<Planet />} />
          <Route path='/customer-service' element={<Customer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App