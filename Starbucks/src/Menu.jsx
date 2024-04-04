import React from 'react'
import './scss/Menu.css'
import { NavLink, Outlet} from 'react-router-dom'
function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to={"/menu"}>Menu</NavLink></li>
          <li><NavLink to={"/menu/featured"}>Featured</NavLink></li>
          <li><NavLink to={"/menu/previous"}>Previous</NavLink></li>
          <li><NavLink to={"/menu/favorites"}>Favorites</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Menu