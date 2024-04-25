import React from 'react'
import './scss/Customer.css'
import Search from '../img/search.png'
import { Link } from 'react-router-dom'
import Need from '../img/partnerGraphic.png'
import Chat from '../img/comment.png'
import Phone from '../img/telephone-call.png'
import Letter from '../img/letter.png'
import { BsStars } from "react-icons/bs";
import Right from '../img/right-arrow.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



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
              <div className="missing">
                <p>Missing stars</p>
                <p>Order was incomplete</p>
              </div>
              <div className="apple-pay">
                <p>Apple Pay</p>
              </div>
            </div>
          </div>
          <div className="right">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h3>Coffee, Meet More Rewards</h3>
                <p>Link your Starbucks Rewards account with an eligible Bank of America debit or credit card and enjoy exciting benefits on qualifying in-app purchases. ...</p>
                <Link>Read more</Link>
              </SwiperSlide>
              <SwiperSlide>
                <h3>More Sips, More Trips</h3>
                <p>Link your Delta SkyMiles® and Starbucks® Rewards accounts to start earning 1 mile per $1* spent at Starbucks.
                  Through the partnership, Delta SkyMiles...</p>
                <Link>Read more</Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className='topic'>
        <div className="left">
          <div className="topic-top">
            <Link>Browse All Topics </Link>
            <img src={Right} alt="" />
          </div>
          <div className="cards">
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <BsStars />
                <p>Starbucks Rewards</p>
              </div>
            </div>
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <svg ng-switch-when="starbucksCard" aria-hidden="true" className="sbuxIcon ng-scope" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M13.9 5.75H2.811c-.558 0-1.011.446-1.011 1v10.5c0 .553.454 1 1.011 1h18.378c.558 0 1.011-.446 1.011-1V6.75c0-.553-.454-1-1.011-1H14.9v10.5c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5V5.75zm-13.1 1c0-1.104.906-2 2.027-2h18.346c1.12 0 2.027.896 2.027 2v10.5c0 1.104-.906 2-2.027 2H2.827c-1.12 0-2.027-.896-2.027-2V6.75zm17.75 4.9a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm0-1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"></path>
                </svg>
                <p>Starbucks Card</p>
              </div>
            </div>
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <svg ng-switch-when="mobileOrdering" aria-hidden="true" className="sbuxIcon ng-scope" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M19.8273,5.05716 C20.53618,5.05716 20.985412,5.5027088 21.2245576,5.83045792 L21.3268527,5.98190775 C21.3410604,6.00464391 21.3538667,6.02591 21.3653,6.04538 C21.5489,6.35803143 21.6649816,6.69234163 21.7250691,6.92884939 L21.7505,7.0384 L21.9527,8.00889 C22.029,8.37966 21.9558,8.78269 21.722,9.11077 C21.58925,9.29730333 21.4085833,9.45131583 21.1964352,9.55195102 L21.0655,9.60576 L20.1839,21.4581 C20.1211864,22.5079091 19.3349229,23.5051444 18.1844866,23.5936332 L18.0177,23.6 L11.8031,23.6 C10.6101261,23.6 9.77400382,22.639045 9.64875053,21.5885259 L9.63611,21.4448 L8.88136,9.64301 C8.55716,9.56447 8.28149,9.36794 8.09804,9.10965 C7.89531125,8.82454875 7.81211953,8.47999672 7.84673645,8.14738078 L7.86878,8.00577 L8.07004,7.03867 C8.11881,6.80446 8.24127,6.40998 8.45555,6.04519 L8.54087143,5.90944327 C8.74538986,5.60528719 9.15590211,5.13644416 9.82173425,5.06611421 L9.99354,5.05716 L19.8273,5.05716 Z M19.8273,6.15717 L9.99354,6.15717 C9.56233714,6.15717 9.29228204,6.75857571 9.18628408,7.1111721 L9.14697,7.2628 L9.14697,7.2628 L8.94559,8.23047 C8.92789,8.3153 8.9461,8.40442 8.99485,8.47268 C9.04333,8.54094 9.11747,8.58036 9.19546,8.58036 L9.91581,8.58036 L10.7342,21.3792 C10.768,22.0076 11.2375,22.5 11.8031,22.5 L18.0177,22.5 C18.5829,22.5 19.0526,22.0076 19.0862,21.3858 L20.0387,8.58036 L20.6252,8.58036 C20.7034,8.58036 20.7776,8.54094 20.826,8.47268 C20.8748,8.40442 20.8927,8.3153 20.8753,8.23047 L20.6737,7.2628 C20.6139,6.97575 20.3304,6.15717 19.8273,6.15717 Z M11.5331,0.5 C12.4313947,0.5 13.168587,1.19934637 13.2436978,2.09024103 L13.25,2.24041 L13.25,4.20747 L12.25,4.20747 L12.25,2.24041 C12.25,1.8537875 11.9695993,1.55382285 11.6277043,1.50651362 L11.5331,1.5 L9.98073,1.5 C9.96968417,1.85407167 9.70247125,2.14357639 9.35824477,2.18936834 L9.26259,2.19568 L6.10119,2.19568 C5.74444167,2.19568 5.44842021,1.93568125 5.39227915,1.59482957 L5.38305,1.5 L3.96693,1.5 C3.6156725,1.5 3.30596674,1.76774611 3.2567884,2.13724076 L3.25,2.24041 L3.25,18.7596 C3.25,19.14625 3.53044271,19.4461833 3.87232933,19.4934872 L3.96693,19.5 L8.58352,19.5 L8.64644,20.5 L3.96693,20.5 C3.06860684,20.5 2.3314131,19.8006626 2.25630219,18.9097689 L2.25,18.7596 L2.25,2.24041 C2.25,1.32979947 2.93991357,0.582526233 3.81878731,0.506388358 L3.96693,0.5 L11.5331,0.5 Z M14.9105,10.5571 C16.8198,10.5571 18.3676,12.105 18.3676,14.0143 C18.3676,15.9236 16.8198,17.4714 14.9105,17.4714 C13.0012,17.4714 11.4534,15.9236 11.4534,14.0143 C11.4534,12.105 13.0012,10.5571 14.9105,10.5571 Z M14.9105,11.6571 C13.6087,11.6571 12.5534,12.7125 12.5534,14.0143 C12.5534,15.3161 13.6087,16.3714 14.9105,16.3714 C16.2123,16.3714 17.2676,15.3161 17.2676,14.0143 C17.2676,12.7125 16.2123,11.6571 14.9105,11.6571 Z"></path>
                </svg>
                <p>Mobile</p>
              </div>
            </div>
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <svg ng-switch-when="store" aria-hidden="true" className="sbuxIcon ng-scope" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M20.2 9.6c-.883 0-1.6.718-1.6 1.6 0 .882.717 1.6 1.6 1.6.882 0 1.6-.718 1.6-1.6 0-.882-.718-1.6-1.6-1.6m0 4.2c-1.434 0-2.6-1.166-2.6-2.6 0-1.433 1.166-2.6 2.6-2.6 1.434 0 2.6 1.167 2.6 2.6 0 1.434-1.166 2.6-2.6 2.6M7.5 13.1h1.4v-1.3H7.5v1.3zm1.5 1H7.4c-.48 0-.9-.42-.9-.9v-1.5c0-.48.42-.9.9-.9H9c.48 0 .9.42.9.9v1.5c0 .53-.37.9-.9.9z"></path><path d="M19.9 7.416L9.372 8c-.276.016-.487.252-.472.528.016.275.24.483.527.47l7.073-.392V16.9h-.6v-5.4c0-.576-.524-1.1-1.1-1.1h-2.7c-.576 0-1.1.524-1.1 1.1v5.4H4V9.28l1.33-.08c.275-.017.485-.254.468-.53-.016-.275-.254-.48-.53-.47l-2.97.182v-.298L19.9 7.117v.3zM12 16.9v-5.396c.005-.035.068-.098.1-.104h2.695c.036.006.1.07.105.1v5.4H12zm8.173-10.8L2 7.1c-.373 0-.7.327-.7.7v.9c0 .372.326.7.728.7h.002L3 9.34v8.06c0 .277.223.5.5.5H17c.276 0 .5-.223.5-.5V8.55l2.7-.15c.373 0 .7-.327.7-.7v-.9c0-.373-.326-.7-.727-.7z"></path>
                </svg>
                <p>In Our Stores</p>
              </div>
            </div>
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <svg ng-switch-when="info" aria-hidden="true" className="sbuxIcon ng-scope" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path>
                </svg>
                <p>Company Info</p>
              </div>
            </div>
            <div className="card">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <svg ng-switch-when="openNow" aria-hidden="true" className="sbuxIcon ng-scope" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M20.94 19.25c0 2.067-1.68 3.75-3.747 3.75H6.407C4.34 23 2.66 21.316 2.66 19.25v-7.666c0-2.066 1.68-3.748 3.747-3.748h10.786c2.066 0 3.748 1.682 3.748 3.748v7.666zM14.61 1.006c.307 0 .557.25.557.557 0 .306-.25.556-.557.556-.307 0-.557-.25-.557-.557 0-.307.25-.557.558-.557zm4.068 6.09c-.03-.054-.07-.105-.12-.147l-4.73-3.898.098-.098c.207.102.437.165.684.165.858 0 1.557-.7 1.557-1.557 0-.86-.7-1.557-1.557-1.557-.858 0-1.557.698-1.557 1.557 0 .246.064.476.167.684L11.513 3.95c-.195.196-.195.512 0 .707.098.098.226.147.354.147.128 0 .256-.05.353-.147l.895-.895 3.73 3.074H6.756l5.364-4.42c.212-.175.242-.49.066-.703-.177-.212-.49-.243-.704-.067L5.044 6.95c-.05.04-.09.092-.12.147-1.89.626-3.265 2.39-3.265 4.487v7.666c0 2.618 2.13 4.75 4.747 4.75h10.786c2.618 0 4.748-2.132 4.748-4.75v-7.666c0-2.097-1.375-3.86-3.264-4.487z"></path><path d="M11.81 13.61c.954 0 1.73.777 1.73 1.73 0 .956-.776 1.732-1.73 1.732s-1.73-.776-1.73-1.73c0-.955.776-1.73 1.73-1.73m0 4.46c1.506 0 2.73-1.225 2.73-2.73 0-1.506-1.224-2.73-2.73-2.73s-2.73 1.224-2.73 2.73c0 1.505 1.224 2.73 2.73 2.73"></path><path d="M14.498 20.668c-.005.086-.077.153-.163.153H9.273c-.086 0-.157-.065-.162-.157l-.63-9.022h6.65l-.632 9.028zm-6.696-10.33c.02-.085.07-.196.114-.26h7.777c.042.063.093.168.11.234l.057.33H7.747l.055-.304zm8.007-1.26H7.8c-.578 0-.89.675-.978 1.058l-.164.917c-.026.145.014.295.11.41.094.112.234.178.382.178h.327l.636 9.088c.036.613.545 1.093 1.16 1.093h5.062c.613 0 1.124-.478 1.16-1.087l.637-9.092h.326c.148 0 .288-.065.384-.178.094-.114.135-.264.108-.41l-.17-.94c-.08-.358-.39-1.035-.97-1.035z"></path>
                </svg>
                <p>Coffee at Home</p>
              </div>
            </div>
          </div>
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