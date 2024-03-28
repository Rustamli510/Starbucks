import React from 'react'
import './scss/Customer.css'
import Search from '../img/search.png'
import { Link } from 'react-router-dom'
import Need from '../img/partnerGraphic.png'
import Chat from '../img/comment.png'
import Phone from '../img/telephone-call.png'
import Letter from '../img/letter.png'

function Costumer() {
  return (
    <>
      <section className='service'>
        <div className="customer-service">
          <div className="left">
            <h1>Starbucks Customer Service</h1>
            <img src={Search} alt="" />
            <input type="text" placeholder='How can we help you?' />
            <div className="left-bottom">
              <h4>Suggestions:</h4>
              <p>Missing stars</p>
              <p>Order was incomplete</p>
              <p>Apple Pay</p>
            </div>
          </div>
          <div className="right">
            <h3>Coffee, Meet More Rewards</h3>
            <p> Link your Delta SkyMiles® and Starbucks® Rewards accounts to start earning 1 mile per $1* spent at Starbucks.
              Through the partnership, Delta SkyMiles...</p>
            <Link>Read more</Link>
          </div>
        </div>
      </section>

      <section className='topic'>
        <div className="left">
          <Link>Browse All Topics </Link>
        </div>
        <div className="right">
          <div className="join-rewards">
            <h1>
              Join Starbucks® Rewards
            </h1>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.
            </p>
            <Link>Join now</Link>
          </div>
        </div>
      </section>

      <div className="need-touch">
        <div className="left">
          <img src={Need} alt="" />
        </div>
        <div className="right">
          <h1>Need to get in touch?</h1>
          <h3>Our costumer care team is here to save the day!</h3>
          <div className="right-center">
            <Link><img src={Chat} alt="" />Chat with us</Link>
            <Link><img src={Phone} alt="" />Give us a call</Link>
            <Link><img src={Letter} alt="" />Send us a message</Link>
          </div>
          <h4>Costumer Service House</h4>
          <div className="right-bottom">
            <div className="top">
              <p><strong>Chat</strong></p>
              <p>7 days a week</p>
              <p>4:00 a.m.–10:00 p.m. (Pacific)</p>
            </div>
            <div className="bottom">
              <p><strong>Chat</strong></p>
              <p>7 days a week</p>
              <p>5:00 a.m.–8:00 p.m. (Pacific)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Costumer