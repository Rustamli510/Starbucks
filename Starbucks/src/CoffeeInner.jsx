import React, { useContext, useEffect, useState } from 'react'
import './scss/CoffeeInner.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Tall from '../img/76b8892b0db8f5d411988fe1bbbe4141.svg'
import Venti from '../img/55e7819f7cf8e1959ec35e680d46d9a9.svg'
import Grande from '../img/2920fb2a8c34d3ddb95ad262872526e9.svg'
import Trenta from '../img/3abf3fc78365ef0b59bbfd0ecd1c8490.svg'
import Loc from '../img/location_2838912.png'
import Star from '../img/wizard_1803305.png'
import Info from '../img/info_471662.png'
import ChooseStore from './ChooseStore'
import DataContext from './Context/DataContext'

function CoffeeInner() {

  const params = useParams()
  console.log(params);
  const [coffeeData, setCoffeeData] = useState(null)
  const [count, setCount] = useState(4);
  // const [coffeeCount, setCoffeeCount] = useState(data.length)
  const [coffeeStyle, setCoffeeStyle] = useState(false)

  const {data,setData}=useContext(DataContext)

  const increment = () => {
    if (count < 12) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCoffeeClick = () => {
    if(data.length>-1) setCoffeeStyle(true)
    if(data.length==15){
      setData(data)
    
    }
    else {
      setData([...data,coffeeData])
    }
    console.log(data);
  }

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

        <div className="right">
          <div className="whats-included">
            <h1>What's included</h1>
            <div className="size-bottom"></div>
          </div>

          <div className="right-center">
            <div>
              <select>
                <fieldset><legend>Ads</legend></fieldset>
                <option >Extra water</option>
                <option >Light water</option>
                <option >No water</option>
                <option >Water</option>
              </select>

              <select>
                <option>Espresso &amp; Shot Options</option>
                <option>Signature Espresso Roast</option>
                <option>Blonde Espresso Roast</option>
                <option>Decaf Espresso Roast</option>
                <option>1/3 Decaf Espresso Roast</option>
                <option>1/2 Decaf Espresso Roast</option>
                <option>2/3 Decaf Espresso Roast</option>
              </select>

              <div className="shots">
                <div className="label">
                  <label>Espresso &amp; Shot Options</label>
                </div>
                <div className="left">
                  <p>Shots</p>
                </div>
                <div className="count">
                  <button onClick={decrement} style={{ visibility: count === 1 ? 'hidden' : 'visible' }}>-</button>
                  <h2>{count}</h2>
                  <button onClick={increment} style={{ visibility: count === 12 ? 'hidden' : 'visible' }}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="customize">
            <button><img src={Star} alt="" />Customize</button>
          </div>
        </div>
      </section>

      <section className='nutrition'>
        <p className="item">
          200★ item
        </p>

        <div className="center">
          <p>Espresso shots topped with hot water create a light layer of <br /> crema culminating in this wonderfully rich cup with depth and <br /> nuance.</p>
          <span>15 calories, 0g sugar, 0g fat</span>
        </div>


      </section>

      <div className="order">
        <button onClick={handleCoffeeClick}>Add to order</button>
      </div>

      <ChooseStore coffeeStyle={coffeeStyle} />
    </div>
  )
}

export default CoffeeInner