import React from 'react'
import './scss/Coffee.css'
import Kofe from '../img/137-78073.webp'
import Ethiopia from '../img/137-71809.webp'
import Brew from '../img/137-71810.webp'
import { Link } from 'react-router-dom'


function Coffee() {
    return (
        <section>
            <div className="container">
                <div className="lets-talk">
                    <h1>Let's talk coffee</h1>
                    <p>Whether you're searching for something new to warm your mug,
                        seeking the best brew method for your favorite blend or exploring
                        our rarest offerings, you’ve come to the right place.
                    </p>
                    <img src={Kofe} alt="" />
                </div>

                <div className="find-coffee">
                    <h1>Let's talk coffee</h1>
                    <p>Whether you're searching for something new to warm your mug,
                        seeking the best brew method for your favorite blend or exploring
                        our rarest offerings, you’ve come to the right place.
                    </p>
                    <Link className='browse'>Browse our coffees</Link>
                </div>

                <div className="start-quiz">
                    <p>Still undecided? Our new Coffee Quiz makes it easy to find the Starbucks® coffee that's made to be yours. Just answer five questions to find the one.</p>
                    <Link className='browse'>Start Quiz</Link>
                    <img src={Ethiopia} alt="" />
                </div>

                <div className="rarest-coffee">
                    <h1>The rarest, most extraordinary coffees Starbucks has to offer</h1>
                    <p>Exceptional coffees from around the world. Sourced for the season, roasted at Starbucks Reserve® Roasteries and crafted with care.</p>
                    <Link className='learn'>Explore Starbucks Reserve®</Link>
                </div>

                <div className="how-brew">
                    <img src={Brew} alt="" />
                    <h1>How to brew</h1>
                    <p>Whether you’re a coffee novice or a seasoned pro, we have all the tools you need to bring your brewing game to the next level.</p>
                    <Link className="learn">Learn to brew your perfect cup</Link>
                </div>

                <div className="end">
                    <p>Starbucks and the Starbucks logo are registered trademarks of Starbucks Corporation used under license by Nestlé.</p>
                    <p>Keurig, K-Cup, and the Keurig trade dress are trademarks of Keurig Green Mountain, Inc., used with permission. Pike Place is a registered trademark of The Pike Place Market PDA, used under license.</p>
                </div>
            </div>
        </section>
    )
}

export default Coffee