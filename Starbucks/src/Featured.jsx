import React from 'react'
import './scss/Featured.css'
import Lavander from '../img/137-89185.webp'
import Lavandercream from '../img/137-89186.webp'
import Oatmilk from '../img/137-89190.webp'
import Oatmilkchill from '../img/137-89357.webp'
import Strawberry from '../img/137-88994.webp'
import Passion from '../img/137-88995.webp'
import Mango from '../img/137-88999.webp'
import Huzelnut from '../img/137-89000.jpg'
import { Link } from 'react-router-dom'

function Featured() {
  return (
    <div>
      <section className='spring'>
        <h1>Spring it on</h1>
      </section>

      <div className="featured-center">
        <div className="featured-center-item">
          <img src={Lavander} alt="" />
          <div className="text">
            <h2>New Lavender Crème Frappuccino® blended beverage</h2>
            <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Lavandercream} alt="" />
          <div className="text">
            <h2>New Iced Lavender Cream Oatmilk Matcha</h2>
            <p>Lavender cream cold foam with subtle floral notes tops matcha green tea and oatmilk on ice. Includes dairy.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Oatmilk} alt="" />
          <div className="text">
            <h2>New Lavender Oatmilk Latte</h2>
            <p>Starbucks® Blonde espresso and oatmilk with subtle floral accents and sweetness served over ice.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Oatmilkchill} alt="" />
          <div className="text">
            <h2>New Lavender Oatmilk Chill</h2>
            <p>A caffeine-free blend of creamy oatmilk and subtle floral notes, hand-shaken with ice and real dragonfruit pieces.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Strawberry} alt="" />
          <div className="text">
            <h2>Strawberry Açaí Lemonade Starbucks Refreshers® beverage</h2>
            <p>Flavors of açaí and passionfruit with lemonade, real strawberry pieces and ice.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Passion} alt="" />
          <div className="text">
            <h2>Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage</h2>
            <p>A blend of lemonade, passionfruit accents and real pineapple pieces shaken with ice.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Mango} alt="" />
          <div className="text">
            <h2>Mango Dragonfruit Lemonade Starbucks Refreshers® beverage</h2>
            <p>Mango and dragonfruit flavors, lemonade and real dragonfruit pieces on ice.</p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="featured-center-item">
          <img src={Huzelnut} alt="" />
          <div className="text">
            <h2>New Hazelnut Oatmilk Shaken Espresso</h2>
            <p>Starbucks® Blonde espresso and hazelnut syrup hand-shaken with ice and finished with a splash of oatmilk.</p>
            <Link>Order now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured