import React from 'react'
import "./scss/Home.css";
import Birthday from '../img/137-88612.webp'
import Pinkdrink from '../img/137-88614.webp'
import Icedcoffee from '../img/137-88616.webp'
import Valentine from '../img/137-88618.jpg'
import Dragon from '../img/137-88554.jpg'
import Vibrantdrink from '../img/137-88556.webp'

function Home() {
    return (
        <section className='center'>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Birthday} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>You + Starbucks Rewards = ❤️</h1>
                    <p>Sounds like a perfect match. Everything you need is in the app: download and start earning free drinks and more. Plus, enjoy mobile ordering and offers made just for you.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Get the app</a>
                </div>
            </div>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Pinkdrink} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>What the heart wants</h1>
                    <p>Treat yourself and a friend to swirls of happiness and rich java chips with the new Chocolate-Covered Strawberry Crème Frappuccino® drink. Here for a limited time.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Order now</a>
                </div>
            </div>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Icedcoffee} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>Totally smitten</h1>
                    <p>Join your Val pal and indulge in the new Chocolate Hazelnut Cookie Cold Brew, a decadent coffee confection with chocolaty cookie crumbles. Here for a limited time.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Order now</a>
                </div>
            </div>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Valentine} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>Totally smitten</h1>
                    <p>Join your Val pal and indulge in the new Chocolate Hazelnut Cookie Cold Brew, a decadent coffee confection with chocolaty cookie crumbles. Here for a limited time.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Send an eGift</a>
                </div>
            </div>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Dragon} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>Happy lunar new year</h1>
                    <p>It’s the dragon’s time to shine with this Starbucks eGift, the perfect way to wish someone a happy 2024.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Send an eGift</a>
                </div>
            </div>
            <div className="column-inner">
                <div className="column-inner-left">
                    <img src={Vibrantdrink} alt="" />
                </div>
                <div className="column-inner-right">
                    <h1>Bold and bright</h1>
                    <p>Celebrate the Year of the Dragon with the fruity, lively Dragon Drink™.</p>
                    <a className="sb-button" href="https://starbucks.app.link/23P2Qm5Nbtb" style={{minWidth: '35px', minHeight: '35px'}}>Order now</a>
                </div>
            </div>
            <div className="center-footer">
                <p>*At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Bonus Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For full details, visit <a href="https://www.starbucks.com/bofa">www.starbucks.com/bofa</a>. Bank of America, N.A. Member FDIC.</p>
            </div>
        </section>
    )
}

export default Home