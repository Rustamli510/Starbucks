import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
import Featured from './Featured'
import Previous from './Previous'
import Favorites from './Favorites'
import MenuInner from './MenuInner'
import CoffeeCategory from './CoffeeCategory'
import CoffeeInner from './CoffeeInner'
import Bucket from './Bucket'
// import ChooseStore from './ChooseStore'
import DataContext from './Context/DataContext'
import Sign from './Sign'

function App() {

  const [data, setData] = useState([])

  return (
    <>
      <Header />
      <DataContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} >
            <Route path='' element={<MenuInner />}>
              <Route path='drinks/:id' element={<CoffeeCategory />} />
            </Route>
            <Route path='featured' element={<Featured />} />
            <Route path='previous' element={<Previous />} />
            <Route path='favorites' element={<Favorites />} />
          </Route>
          <Route path='/menu/product/:id' element={<CoffeeInner />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/giftcards' element={<Giftcards />} />
          <Route path='/our-company' element={<Company />} />
          <Route path='/our-coffee' element={<Coffee />} />
          <Route path='/people' element={<People />} />
          <Route path='/planet' element={<Planet />} />
          <Route path='/customer-service' element={<Customer />} />
          <Route path='/bucket' element={<Bucket />} />
          <Route path='/sign-in' element={<Sign />} />
        </Routes>
      </DataContext.Provider>
      <Footer />
    </>
  )
}

export default App