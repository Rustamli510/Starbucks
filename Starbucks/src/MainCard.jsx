import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import axios from "axios";
import "./scss/MainCard.css";
function MainCard() {
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetchCardData();
  }, []);
  function fetchCardData() {
    axios.get(`http://localhost:3000/giftcard`).then((res) => {
      const selectedData = res.data
        .map((category) => category.cards.find((item) => item.id === id))
        .find((item) => item !== undefined);
      setCardData(selectedData);
    });
  }
  return (
    <div className="main-card">
      <div className="formCard">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/gift" underline="hover" style={{ color: "#00000094" }}>
            Gift
          </Link>
          <Typography style={{ color: "#00000094", fontWeight: "600" }}>
            Create eGift
          </Typography>
        </Breadcrumbs>
        <h1>Create eGift</h1>
        <img src={cardData?.img} alt="" />
        <p>
          <sup>*</sup> indicates required field
        </p>
        <div className="form-bottom-text">
          <div className="select-text">
            <h2>Gift amount</h2>
            <select name="" id="">
              <option value="">$25</option>
              <option value="">$50</option>
              <option value="">$100</option>
              <option value="">custom amount</option>
            </select>
          </div>
          <div className="select-text">
            <h2>Who are you gifting to?</h2>
            <input type="text" />
            <input type="text" id="" />
          </div>
          <div className="add-recipient">
            <p>Maximum of 10 recipients</p>
            <button>Add another recipient</button>
          </div>
          <div className="select-text">
            <h2>Personal note</h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="select-text">
            <h2>From</h2>
            <input type="text" name="" id="" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
