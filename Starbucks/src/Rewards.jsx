import React, { useState } from 'react'
import './scss/Rewards.css'
import Star from './../img/Star.webp'
import One from './../img/getting-started-1@2x.webp'
import Two from './../img/getting-started-2@2x.webp'
import Three from './../img/getting-started-3@2x.webp'
import Twentyfive from './../img/025.webp'
import Hundred from './../img/100.webp'
import TwoHundred from './../img/200.webp'
import ThreeHundred from './../img/300.webp'
import FourHundred from './../img/400.webp'
import Fun1 from './../img/1-fun-freebies.webp'
import Fun2 from './../img/2-order-and-pay-ahead.webp'
import Fun3 from './../img/3-get-to-free-faster.webp'


function Rewards() {

  const [displayed, setDisplayed] = useState(<div className="stars-bottom">
    <img src={Twentyfive} alt="" />
    <div className="text">
      <h3>Customize your drink</h3>
      <p>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
    </div>
  </div>)

  const [border, setBorder] = useState(0);

  const handleClick = (id, index) => {
    setDisplayed(id);
    setBorder(index);
  }
  return (
    <div>
      <div className="banner">
        <h1>Starbucks® Rewards</h1>
      </div>

      <section className='free-coffee'>
        <div className="free-coffee-left">
          <h1>FREE COFFEE <br /> is a tap away</h1>
          <h4>Join now to start earning Rewards.</h4>
          <div className="free-coffee-left-bottom">
            <a className='join' href="">Join now</a>
            <p>Or <a href="https://www.starbucks.com/rewards/mobile-apps">join in the app</a> for the best experience</p>
          </div>
        </div>
        <div className="free-coffee-right">
          <img src={Star} alt="" />
        </div>
      </section>

      <section className='easy-start'>
        <div className="easy-start-top">
          <h2>Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>

        <div className="easy-start-bottom">
          <div className="easy-start-bottom-item">
            <div className="img">
              <img src={One} alt="picture is not find" />
            </div>
            <div className="text">
              <h3>Create an account</h3>
              <p>To get started, <a href="/account/create">join now</a>. You can also <a href="https://starbucks.app.link/VLa2I3inh9">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>
          </div>

          <div className="easy-start-bottom-item">
            <div className="img">
              <img src={Two} alt="picture is not find" />
            </div>
            <div className="text">
              <h3>Order and pay how you’d like</h3>
              <p >Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="#waystopay">Learn how</a></p>
            </div>
          </div>

          <div className="easy-start-bottom-item">
            <div className="img">
              <img src={Three} alt="picture is not find" />
            </div>
            <div className="text">
              <h3>Earn Stars, get Rewards</h3>
              <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
          </div>
        </div>
      </section>

      <section className='stars'>
        <div className="stars-top">
          <h2>Get your favorites for free</h2>
          <ul>
            <li onClick={() => handleClick(<div className="stars-bottom">
              <img src={Twentyfive} alt="" />
              <div className="text">
                <h3>Customize your drink</h3>
                <p>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
              </div>
            </div>, 0)}
              className={border === 0 ? 'active' : ''}
            >25<span>★</span></li>
            <li onClick={() => handleClick(<div className="stars-bottom">
              <img src={Hundred} alt="" />
              <div className="text">
                <h3>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h3>
                <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</p>
              </div>
            </div>, 1)}
              className={border === 1 ? 'active' : ''}
            >100<span>★</span></li>
            <li onClick={() => handleClick(<div className="stars-bottom">
              <img src={TwoHundred} alt="" />
              <div className="text">
                <h3>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h3>
                <p>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
              </div>
            </div>, 2)}
              className={border === 2 ? 'active' : ''}
            >200<span>★</span></li>
            <li onClick={() => handleClick(<div className="stars-bottom">
              <img src={ThreeHundred} alt="" />
              <div className="text">
                <h3>Sandwich, protein box or at-home coffee</h3>
                <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>              </div>
            </div>, 3)}
              className={border === 3 ? 'active' : ''}
            >300<span>★</span></li>
            <li onClick={() => handleClick(<div className="stars-bottom">
              <img src={FourHundred} alt="" />
              <div className="text">
                <h3>Select Starbucks® merchandise</h3>
                <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
              </div>
            </div>, 4)}
              className={border === 4 ? 'active' : ''}
            >400<span>★</span></li>
          </ul>
        </div>
        <div className="stars-bottom" style={{ transition: 'opacity 1s' }}>
          {displayed}
        </div>
      </section>

      <section className='endless'>
        <div className="endless-top">
          <h2>Endless Extras</h2>
          <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
        </div>
        <div className="endless-bottom">
          <div className="endless-bottom-item">
            <img src={Fun1} alt="presentation" />
            <h3>Fun freebies</h3>
            <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
            <button>Learn more</button>
          </div>
          <div className="endless-bottom-item">
            <img src={Fun2} alt="presentation" />
            <h3>Order &amp; pay ahead</h3>
            <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
            <button>Learn more</button>
          </div>
          <div className="endless-bottom-item">
            <img src={Fun3} alt="presentation" />
            <h3>Get to free faster</h3>
            <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
            <button>Learn more</button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Rewards