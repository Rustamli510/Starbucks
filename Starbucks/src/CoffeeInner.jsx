import React, { useEffect, useState } from 'react'
import './scss/CoffeeInner.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CoffeeInner() {

  const params = useParams()
  console.log(params);
  const [coffeeData, setCoffeeData] = useState(null)

  const getCoffee = () => {
    axios.get(`http://localhost:3000/coffee/${params.id}`).then(res => {
      setCoffeeData(res?.data)
      console.log(res.data);
    })
  }

  useEffect(() => {
    getCoffee()
  }, [])

  return (
    <div>
      <nav>
        <ul>
          <li>Menu</li>
          <li>/</li>
          <li>Hot Coffees</li>
          <li>/</li>
          <li>Americano</li>
        </ul>
      </nav>

      <section className='coffeedata'>
        <div className="alldiv">
          <div className="img">
            <div className='imgDiv'>
            <img src={coffeeData?.img} alt="" />
            </div>
          </div>
          <div className="text">
            <h2>{coffeeData?.name}</h2>
            <p>15 calories</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoffeeInner