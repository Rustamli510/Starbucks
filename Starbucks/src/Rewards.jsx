import React from 'react'
import './scss/Rewards.css'
import Star from './../img/Star.webp'
import One from './../img/getting-started-1@2x.webp'
import Two from './../img/getting-started-2@2x.webp'
import Three from './../img/getting-started-3@2x.webp'

function Rewards() {
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

    </div>
  )
}

export default Rewards