import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./scss/CoffeCategory.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

function CoffeeCategory() {
  const params = useParams();
  const {pathname}=useLocation()
  const [category, setCategory] = useState();

  const getCategory = () => {
    axios.get("http://localhost:3000/coffee").then((res) => {
      setCategory(res.data);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log(category);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/menu"} underline="hover" style={{ color: "#00000094" }}>
          Menu
        </Link>
        <Typography style={{ color: "#00000094", fontWeight: "600" }}>
          {pathname.split("/")[pathname.split("/").length-1][0].toUpperCase()+pathname.split("/")[pathname.split("/").length-1].slice(1)}
        </Typography>
      </Breadcrumbs>
      {category &&
        Object.entries(
          category
            ?.filter((item) => {
              return (
                item.subcategory.toLowerCase().split(" ").join("-") ===
                params.id
              );
            })
            .reduce((prev, cur, index) => {
              let key = cur["type"];
              if (!prev[key]) {
                prev[key] = [];
              }
              prev[key].push(cur);
              return prev;
            }, {})
        ).map((item) => {
          return (
            <div>
              <h2>{item?.[0] === "undefined" && params.id}</h2>

              <div className="top">
                <h1>{item[1][0]?.type}</h1>
              </div>
              <div className="bottom">
                {item[1].map((a) => {
                  return (
                    <Link to={`/menu/product/${a.id}`}>
                      <div className="category-inner">
                        <img src={a.img} alt="" />
                        <div className="text">
                          <h1>{a.name}</h1>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CoffeeCategory;
