import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './scss/MenuInner.css'

function MenuInner() {
    const [drink, setDrinks] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/category').then(res => {
            setDrinks(res.data)
            console.log(drink);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className="sidebar">
                <div className="container">
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
            </div>
        </div>
    )
}

export default MenuInner