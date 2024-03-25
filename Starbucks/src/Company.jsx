import React from "react";
import "./scss/Company.css";
import Verona from "../img/137-78073.webp";
import Dave from "../img/137-72909.jpg";
import Nature from "../img/137-72911.jpg";
function Company() {
  return (
    <section>
      <div className="container">
        <div className="company-top">
          <h1>Let's talk coffee</h1>
          <p>
            Whether you're searching for something new to warm your mug, seeking
            the best brew method for your favorite blend or exploring our rarest
            offerings, you’ve come to the right place.
          </p>
          <img src={Verona} alt="" />
          <h1>Find your favorite at-home coffee</h1>
          <p>
            From K-Cup pods to Starbucks® Premium Instant, we offer a wide
            selection of coffee to fill your cup.
          </p>
          <a href="https://athome.starbucks.com/explore-our-coffees/">
            Browse our coffees
          </a>
        </div>
        <div className="company-center">
          <img src={Dave} alt="" />
          <h1>Coffee Craft</h1>
          <p>
            It takes many hands to craft the perfect cup of coffee – from the
            farmers who tend to the red-ripe coffee cherries, to the master
            roasters who coax the best from every bean, and to the barista who
            serves it with care. We are committed to the highest standards of
            quality and service, embracing our heritage while innovating to
            create new experiences to savor.
          </p>
          <a href="https://stories.starbucks.com/stories/coffee-craft/">
            Learn more
          </a>
          <img src={Nature} alt="" />
          <h1>We Believe in the Pursuit of Doing Good</h1>
          <p>
            It takes many hands to craft the perfect cup of coffee – from the
            farmers who tend to the red-ripe coffee cherries, to the master
            roasters who coax the best from every bean, and to the barista who
            serves it with care. We are committed to the highest standards of
            quality and service, embracing our heritage while innovating to
            create new experiences to savor.
          </p>
        </div>
        <div className="company-bottom">
          <h2>People</h2>
          <p>
            Our aspiration is to be people positive – investing in humanity and
            the well-being of everyone we connect with, from our partners to
            coffee farmers to the customers in our stores and beyond.
          </p>
          <a
            className="learn"
            href="https://stories.starbucks.com/stories/coffee-craft/"
          >
            Learn more
          </a>
          <h2>Planet</h2>
          <p>
            We are striving to become resource positive – giving back more than
            we take from the planet. We are working to store more carbon than we
            emit, replenish more freshwater than we use, and eliminate waste. We
            know we can’t do it alone. It takes all of us.
          </p>
          <a
            className="learn"
            href="https://stories.starbucks.com/stories/coffee-craft/"
          >
            Learn more
          </a>

          <h1>Learn More About Us</h1>

          <h2>Stories News</h2>
          <p>
            Behind every cup of coffee is a story. Enjoy some of our favorites
            along with all the latest news from the storytellers at Starbucks
            Stories.
          </p>
          <a className="learn" href="https://stories.starbucks.com/">Check out Starbucks Stories</a>

          <h2>Company Profile</h2>
          <p>
          Here’s a closer look at our company.
          </p>
          <a className="learn" href="https://stories.starbucks.com/">Learn more</a>

          <h2>Company Timeline</h2>
          <p>
          Read a brief history of Starbucks, from 1971 through today.
          </p>
          <a className="learn" href="https://stories.starbucks.com/">Learn more</a>

          <h3>Ethics Compliance</h3>
          <a className="learn" href="https://stories.starbucks.com/">Learn more</a>

          <h3>Corporate Governance</h3>
          <a className="learn" href="https://stories.starbucks.com/">Learn more</a>  
        </div>
      </div>
    </section>
  );
}

export default Company;
