import React from 'react';
import './scss/Company.css'
import Verona from '../img/137-78073.webp'

function Company() {
  return (
    <section>
      <div className="container">
        <div className="company-top">
          <h1>Let's talk coffee</h1>
          <p>Whether you're searching for something new to warm your mug, seeking the best brew method for your favorite blend or exploring our rarest offerings, you’ve come to the right place.</p>
          <img src={Verona} alt="" />
          <h1>Find your favorite at-home coffee</h1>
          <p>From K-Cup pods to Starbucks® Premium Instant, we offer a wide selection of coffee to fill your cup.</p>
          <a href="https://athome.starbucks.com/explore-our-coffees/">Browse our coffees</a>
        </div>
      </div>
    </section>
  );
}

export default Company;
