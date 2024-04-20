import React from 'react'
import './scss/Menu.css'
import { NavLink, Outlet} from 'react-router-dom'
import ChooseStore from './ChooseStore'

function Menu() {
  return (
    <div>
      <nav>
        <ul className='menu'>
          <li><NavLink to={"/menu"}>Menu</NavLink></li>
          <li><NavLink to={"/menu/featured"}>Featured</NavLink></li>
          <li><NavLink to={"/menu/previous"}>Previous</NavLink></li>
          <li><NavLink to={"/menu/favorites"}>Favorites</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
      <ChooseStore/>
    </div>
  )
}

export default Menu