import React, { useState } from 'react'
import './scss/Rewards.css'
import { Link } from 'react-router-dom'
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
import A1 from './../img/1A.png'
import B1 from './../img/1B.webp'
import A2 from './../img/2A.png'
import B2 from './../img/2B.webp'
import Risunka from './../img/844262945b2a8b8cfb293156e2583872.webp'
import LStars from './../img/7997fb008f368630d3ca3c1194fd8404.svg'
import RStars from './../img/b7e1b20df72e802cb1cf0e97e8fe21d0.svg'
import Delta from './../img/delta-skymiles.webp'
import Bank from './../img/bank-of-america.webp'



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
        <Link>Join in the app</Link>
      </div>

      <section className='free-coffee' style={{overflow:"hidden"}}>
        <div className="free-coffee-left">
          <h1>FREE COFFEE <br /> is a tap away</h1>
          <h4>Join now to start earning Rewards.</h4>
          <div className="free-coffee-left-bottom">
            <a className='join' href="">Join now</a>
            <a className='join-app' href="">Join in the app </a>
            <br />
            <br />
            <p>Or <a href="https://www.starbucks.com/rewards/mobile-apps">join in the app</a> for the best experience</p>
            <a href="https://www.starbucks.com/rewards/mobile-apps">Or join online</a>
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
            <div className="img">
              <img src={Fun1} alt="presentation" />
            </div>
            <div className="text">
              <h3>Fun freebies</h3>
              <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="endless-bottom-item">
            <div className="img">
              <img src={Fun2} alt="presentation" />
            </div>
            <div className="text">
              <h3>Order &amp; pay ahead</h3>
              <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="endless-bottom-item">
            <div className="img">
              <img src={Fun3} alt="presentation" />
            </div>
            <div className="text">
              <h3>Get to free faster</h3>
              <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>

      </section>

      <section className='cashorcard'>
        <div className="cashorcard-top">
          <h2>Cash or card, you earn Stars</h2>
          <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        </div>
        <div className="cashorcard-bottom">
          <div className="dollar-section">
            <div className="dollar">
              <p>1<span>★</span>&nbsp;<span>per dollar</span></p>
              <p>Pay as you go</p>
            </div>
            <div className="dollar-middle">
              <img src={A1} alt="" />
              <div className="dollar-middle-text">
                <h3>Scan and pay separately</h3>
                <p>Use cash or credit/debit card at the register.</p>
              </div>
            </div>

            <div className="dollar-middle">
              <img src={B1} alt="" />
              <div className="dollar-middle-text">
                <h3>Save payment in the app</h3>
                <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
              </div>
            </div>
          </div>
          <div className="dollar-section">
            <div className="dollar">
              <p>2<span>★</span>&nbsp;<span>per dollar</span></p>
              <p>Pay as you go</p>
            </div>
            <div className="dollar-middle">
              <img src={A2} alt="" />
              <div className="dollar-middle-text">
                <h3>Preload</h3>
                <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
              </div>
            </div>

            <div className="dollar-middle">
              <img src={B2} alt="" />
              <div className="dollar-middle-text">
                <h3>Register your gift card</h3>
                <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='rewards-coming'>
        <img src={Risunka} style={{ width: '1349px', height: '621px' }} alt="" />
        <div className="inner">
          <div className="rstars">
            <img src={LStars} alt="" />
          </div>
          <div className="inner-text">
            <div className="inner-text-top">
              <h2>Keep the Rewards Coming</h2>
              <p>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
            </div>
            <div className="inner-text-bottom">
              <div className="inner-text-item">
                <img src={Delta} alt="" />
                <p><a href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042" target="_blank"><span>Link your Delta SkyMiles®</span></a> and Starbucks® Rewards accounts to earn 1 mile per $1 spent at Starbucks and double Stars on Delta travel days.<a href="#deltaSkymilesTermsDescriptionId"><sup>1</sup></a></p>
              </div>
              <div className="inner-text-item">
                <img src={Bank} alt="" />
                <p><a href="https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" target="_blank"><span>Link your Bank of America</span></a> eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.<a href="#bankOfAmericaTermsDescriptionId"><sup>2</sup></a></p>
              </div>
            </div>
            <a className='join-starbucks-rewards' href="/account/create">Join Starbucks® Rewards</a>
          </div>
          <div className="lstars">
            <img src={RStars} alt="" />
          </div>
        </div>

      </section>

      <section className='questions'>
        <div className="questions-text">
          <h2 class="sb-heading text-semibold text-lg pb3" tabindex="-1">Questions?</h2>
          <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href="https://customerservice.starbucks.com/app/answers/list/p/552" target="_blank"><span>right over here</span></a>.</p>
        </div>
      </section>

      <div className="info">
        <div className="top">
          <p>At participating stores. Restrictions apply.</p>
          <p><sup>1</sup>Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <a href="https://www.deltastarbucks.com/terms" target="_blank"><span>deltastarbucks.com/terms</span></a>.<a href="#deltaSkymilesNoteId">↩</a></p>
          <p><sup>2</sup>At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit <a href="https://promotions.bankofamerica.com/starbucks#disclosure-1223753557" target="_blank"><span>Terms and Conditions</span></a>. Bank of America, N.A. Member FDIC.<a href="#bankOfAmericaNoteId">↩</a></p>
        </div>
        <div className="mid">
          <div className="earning">
            <h3>Earning Stars</h3>
            <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
            <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
            <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
          </div>
          <div className="termofuse">
            <h3>Terms of Use</h3>
            <p>For full program details visit <a href="https://www.starbucks.com/rewards/terms/" target="_blank"><span>starbucks.com/rewards/terms</span></a>.</p>
            <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <a href="/store-locator" target="_blank"><span>Starbucks Store Locator</span></a> and search for locations honoring “Redeem Rewards”.</p>
          </div>
        </div>
        <div className="bottom">
          <div className="benefits">
            <h3>Benefits</h3>
            <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
          </div>
          <div className="redeeming">
            <h3>Redeeming Rewards</h3>
            <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards