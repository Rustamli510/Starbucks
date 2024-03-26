import React from 'react'
import './scss/People.css'
import Inclusion from '../img/137-73340.jpg'
import Opportunity from '../img/137-73341.jpg'
import Community from '../img/137-73342.jpg'
import { Link } from 'react-router-dom'

function People() {
    return (
        <section>
            <div className="people-top">
                <h1>PUTTING PEOPLE <br /> FIRST</h1>
                <p>We’re investing in the well-being of those we connect with, working hard <br /> toward a better future.</p>
            </div>

            <div className="people-center">
                <div className="col">
                    <div className="col-left">
                        <img src={Inclusion} alt="" />
                    </div>
                    <div className="col-right">
                        <h2>Inclusion Diversity</h2>
                        <p>Our commitment to equal opportunity means cultivating an environment where differences are embraced and building a culture that fosters a sense of belonging.</p>
                        <Link href="https://stories.starbucks.com/stories/inclusion-diversity/">Find examples</Link>
                    </div>
                </div>

                <div className="col">
                    <div className="col-left">
                        <img src={Opportunity} alt="" />
                    </div>
                    <div className="col-right">
                        <h2>Opportunity</h2>
                        <p>We put our partners (employees) first, empowering them by providing meaningful opportunities to pursue their aspirations.</p>
                        <Link href="https://stories.starbucks.com/stories/inclusion-diversity/">Read stories</Link>
                    </div>
                </div>

                <div className="col">
                    <div className="col-left">
                        <img src={Community} alt="" />
                    </div>
                    <div className="col-right">
                        <h2>Community</h2>
                        <p>Across the globe, we serve to strengthen each community we are part of by being the neighbor every neighborhood wants.</p>
                        <Link href="https://stories.starbucks.com/stories/inclusion-diversity/">See how</Link>
                    </div>
                </div>
            </div>

            <div className="people-bottom">
                <h1>SEE What's next</h1>
                <p>Follow the latest ways we’re supporting and strengthening the people around us.</p>
                <Link>Learn more</Link>
            </div>
        </section>
    )
}

export default People