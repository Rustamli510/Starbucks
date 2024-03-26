import React from 'react'
import './scss/Planet.css'
import Starforest from '../img/137-73350.webp'
import Hamburger from '../img/137-73351.webp'
import Coffee from '../img/137-73352.webp'
import Plant from '../img/137-73353.webp'
import Recycle from '../img/137-73354.webp'
import Market from '../img/137-73355.webp'
import { Link } from 'react-router-dom'


function Planet() {
    return (
        <section>
            <div className="planet-top">
                <h1>BECOMING RESOURCE <br /> POSITIVE</h1>
                <p>We are committed to becoming resource positive – to give more than we take <br /> from the planet. We will store more carbon than we emit, eliminate waste and <br /> conserve and replenish more freshwater than we use.</p>
            </div>

            <div className="col">
                <div className="col-left">
                    <img src={Starforest} alt="" />
                </div>
                <div className="col-right">
                    <h2>2030 COMMITMENTS</h2>
                    <p>Starbucks set a multi-decade commitment to reduce our carbon, our water and our waste footprints by half by 2030.</p>
                    <Link>Read More</Link>
                </div>
            </div>

            <div className="areas">
                <h1>areas of focus</h1>
                <p>We’re driving innovation at scale to achieve our 2030 targets through these five <br /> focus areas:</p>
            </div>

            <div className="circle">
                <div className="left">
                    <img src={Hamburger} alt="" />
                </div>
                <div className="right">
                    <p>Expanding <strong>plant-based menu options</strong></p>
                </div>
            </div>

            <div className="circle">
                <div className="left">
                    <img src={Coffee} alt="" />
                </div>
                <div className="right">
                    <p>Shifting away from single-use to <strong>reusable <br /> packaging</strong></p>
                </div>
            </div>

            <div className="circle">
                <div className="left">
                    <img src={Plant} alt="" />
                </div>
                <div className="right">
                    <p>Investing in <strong>regenerative agriculture, <br /> reforestation, forest conservation and <br /> water replenishment</strong> in our supply chain</p>
                </div>
            </div>

            <div className="circle">
                <div className="left">
                    <img src={Recycle} alt="" />
                </div>
                <div className="right">
                    <p>Working on better ways to <strong>manage our <br /> waste</strong></p>
                </div>
            </div>

            <div className="circle">
                <div className="left">
                    <img src={Market} alt="" />
                </div>
                <div className="right">
                    <p>Innovating with more <strong>responsible stores</strong>, <br /> operations, manufacturing and delivery</p>
                </div>
            </div>

            <div className="planet-b">
                <h1><strong>PROGRESS TOWARD <br /> OUR COMMITMENTS</strong></h1>
                <p>Starbucks is committed to transparency. Learn more about our commitments to <br /> the planet and our progress on our Environmental and Social Impact Reporting <br /> Hub.</p>
                <Link className='learn'>Learn more</Link>
            </div>

            <div className="planet-b">
                <h1><strong>ETHICAL SOURCING <br /> STANDARDS</strong></h1>
                <p>Track the responsible ways we produce and purchase our coffee, tea, cocoa and <br /> manufactured goods.</p>
                <Link className='learn'>Learn more</Link>
            </div>

            <div className="planet-b">
                <h1><strong>ALL THE LATEST</strong></h1>
                <p>Stay up to date with Starbucks commitment to environmental sustainability.</p>
                <Link className='learn'>Get news now</Link>
            </div>
        </section>
    )
}

export default Planet