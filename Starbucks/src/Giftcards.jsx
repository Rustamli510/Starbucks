import React, { useEffect, useState } from "react";
import "./scss/GiftCards.css";
import CardFoto from "../img/group-gift-cards.webp";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    CardData();
  }, []);
  function CardData() {
    axios
      .get("http://localhost:3000/giftcard")
      .then((res) => setData(res.data));
  }
  const cardsCategory = data.map((item) => item.category);
  const cardsAll = data.map(item => item.see)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="gift-cards">
      <div className="carusel-cards">
        <div className="carusel-texts">
          <h5 className="one-category">{cardsCategory[0]}</h5>
          <Link to={`/gift/category/${cardsCategory[0]}`} className="see">{cardsAll[0]}</Link>
        </div>
        <Slider {...settings}>
          {data[0]?.cards.map((item) => (
            <Link to={`/gift/${item.id}`} key={item.id}>
              <div className="gift-card"  >
                <img src={item.img} alt="" />
              </div>
            </Link>

          ))}
        </Slider>
        <div className="fade">
          <img src={CardFoto} alt="" />
          <p>
            New! Effortlessly send up to 10 eGifts per purchase. Select a design
            to start!
          </p>
        </div>
      </div>
      <div className="received">
        <div className="check-balance">
          <div className="received-texts">
            <h1>Received a gift card?</h1>
            <p>Earns 2★Stars per $1</p>
          </div>
          <div className="received-buttons">
            <Link>Add or Reload</Link>
            <button>Check balance</button>
          </div>
        </div>
        <Link className="path">
          Card Terms & Conditions{" "}
          <svg style={{ width: "24px", height: "19px" }}>
            <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
          </svg>
        </Link>
      </div>
      {data
        ?.map((categoryData, index) => (
          <div key={index} className="carusel-cards">
            <div className="carusel-texts">
              <h5 className="one-category">{categoryData.category}</h5>
              <Link
                to={`/gift/category/${categoryData.category}`}
                className="see"
              >
                {categoryData.see}
              </Link>
            </div>
            <div className="slider-carousel">
              {categoryData.cards.map((card) =>
                card.length > 4 ? (
                  <Slider {...settings}>
                    <Link to={`/gift/${card.id}`} key={card.id}>
                      <div className="gift-card">
                        <img src={card.img} alt="" />
                      </div>
                    </Link>
                  </Slider>
                ) : (
                  <Link to={`/gift/${card.id}`} key={card.id}>
                    <div className="gift-card">
                      <img src={card.img} alt="" />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        ))
        .slice(1)}
    </div>
  );
}

export default Card;
