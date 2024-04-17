import React, { useEffect, useState } from 'react'
import './scss/CoffeeInner.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Tall from '../img/76b8892b0db8f5d411988fe1bbbe4141.svg'
import Venti from '../img/55e7819f7cf8e1959ec35e680d46d9a9.svg'
import Grande from '../img/2920fb2a8c34d3ddb95ad262872526e9.svg'
import Trenta from '../img/3abf3fc78365ef0b59bbfd0ecd1c8490.svg'
import Loc from '../img/location_2838912.png'

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

  const cupSize = [
    {
      id: 'Tall',
      capacity: '12fl'
    },
    {
      id: 'Grande',
      capacity: '16fl'
    },
    {
      id: 'Venti',
      capacity: '24fl'
    },
    {
      id: 'Trenta',
      capacity: '30fl'
    }
  ]

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

      <section className='product-bottom'>
        <div className="left">
          <div className="size-options">
            <h1>Size options</h1>
            <div className="size-bottom"></div>
          </div>

          <div className="sizes">
            <div className="cups">
              <img src={Tall} alt="" />
              <h5>Tall</h5>
              <p>12 fl oz</p>
            </div>
            <div className="cups">
              <img src={Grande} alt="" />
              <h5>Grande</h5>
              <p>16 fl oz</p>
            </div>
            <div className="cups">
              <img src={Venti} alt="" />
              <h5>Venti</h5>
              <p>24 fl oz</p>
            </div>
            <div className="cups">
              <img src={Trenta} alt="" />
              <h5>Trenta</h5>
              <p>30 fl oz</p>
            </div>
          </div>

          <div className="select-store">
            <img src={Loc} alt="" />
            <p>Select a store to view availability</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoffeeInner