import React from "react";
import { Link } from "react-router-dom";
import "./scss/Previous.css";
import Moon from "../img/moon-phases.webp";
function Previous() {
  return (
    <div className="section">
      <div className="card">
        <h1>Previous</h1>
        <img src={Moon} alt="" />
        <div className="text">
          <h2>When history repeats itself</h2>
          <p>Previous orders will appear here to quickly order again.</p>
        </div>
        <div className="links">
          <Link>Sign in</Link>
          <Link>Join now</Link>
        </div>
      </div>
    </div>
  );
}

export default Previous;
