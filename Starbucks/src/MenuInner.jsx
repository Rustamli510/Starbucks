import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './scss/MenuInner.css'
import { Link, Outlet, useLocation } from 'react-router-dom'

function MenuInner() {
    const [drink, setDrink] = useState([])
    const { pathname } = useLocation()
    console.log(location);

    const getData = () => {
        axios.get('http://localhost:3000/category').then(res => {
            setDrink(res.data)
            console.log(drink);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container">
            <div className='menuinner'>
                <div className="sidebar">
                    <div className="drinks">
                        <h1>Drinks</h1>
                        <ul>
                            {drink.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })}
                        </ul>
                    </div>
                    <div className="food">
                        <h1>Food</h1>
                        <ul>
                            <li>Hot Breakfast</li>
                            <li>Oatmeal & Yogurt</li>
                            <li>Bakery</li>
                            <li>Lunch</li>
                            <li>Snacks & Sweets</li>
                        </ul>
                    </div>
                    <div className="at-home">
                        <h1>At Home Coffee</h1>
                        <ul>
                            <li>Whole Bean</li>
                            <li>VIA® Instant</li>
                        </ul>
                    </div>
                    <div className="merc">
                        <h1>Merchandise</h1>
                        <ul>
                            <li>Cold Cups</li>
                            <li>Tumblers</li>
                            <li>Mugs</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                {/* <Outlet /> */}

                <div className='all'>

                    {
                        pathname === `/menu` ? <div className="upper-text">
                            <h1>Menu</h1>
                            <h2>Drinks</h2>
                        </div> : <p></p>
                    }


                    {
                        pathname === "/menu" ? <div className='category-coffee'>
                            {
                                drink.map(item => {
                                    return <Link className='category-coffee-item' key={item.id} to={`/menu/drinks/${item.name.toLowerCase().split(" ").join("-")}`}>

                                        <div className='left-img'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='right-text'>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                })
                            }
                        </div> : <Outlet />
                    }
                </div>
            </div>

        </div>
    )
}

export default MenuInner