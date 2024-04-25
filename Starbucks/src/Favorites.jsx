import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Previous.css'
import Tapes from '../img/fav-tapes.webp'

function Favorites() {
  return (
    <div className='section'>
    <div className="card">
        <h1>Favorites</h1>
        <img src={Tapes} alt="" />
        <div className="text">
          <h2>Save your favorite mixes</h2>
        <p>Use the heart to save customizations. Your favorites will appear here to order again.</p>
        </div>
        <div className="links">
          <Link>Sign in</Link>
          <Link>Join now</Link>
        </div>
      </div>
    </div>
  )
}

export default Favorites
