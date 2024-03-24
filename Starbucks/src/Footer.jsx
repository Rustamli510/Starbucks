import './scss/Footer.css'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Pinterest from '../img/pinterest.png'
import Spotify from '../img/spotify.png'
import Twitter from '../img/twitter.png'
import Youtube from '../img/youtube.png'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footer-media">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        About Us
                    </AccordionSummary>
                    <AccordionDetails>
                        <li>Our Company</li>
                        <li>Our Coffee</li>
                        <li>Stroies and News</li>
                        <li>Starbucks Archive</li>
                        <li>Investor Relations</li>
                        <li>Customer Service</li>
                        <li>Contact us</li>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Careers
                    </AccordionSummary>
                    <AccordionDetails>
                        <li>Culture and Values</li>
                        <li>Inclusion, Diversity and Equity</li>
                        <li>College Achievement plan</li>
                        <li>Alumni Community</li>
                        <li>U.S.Careers</li>
                        <li>International Careers</li>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Social Impacts
                    </AccordionSummary>
                    <AccordionDetails>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Enviromental and Social Impact Reporting</li>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        For Business Partners
                    </AccordionSummary>
                    <AccordionDetails>
                        <li>landlord support center</li>
                        <li>suppliers</li>
                        <li>corporate gifts card sales</li>
                        <li>office and foodservice coffee</li>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Order and Pick up
                    </AccordionSummary>
                    <AccordionDetails>
                        <li>order on the app</li>
                        <li>order on the web</li>
                        <li>delivery</li>
                        <li>order and pick up options</li>
                        <li>explore and find coffee for home</li>
                        <li>International Careers</li>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="footer-top">
                <ul>
                    <li><h1>About us</h1></li>
                    <li><Link to="our-company">Our Company</Link></li>
                    <li>Our Coffee</li>
                    <li>Stroies and News</li>
                    <li>Starbucks Archive</li>
                    <li>Investor Relations</li>
                    <li>Customer Service</li>
                    <li>Contact us</li>
                </ul>
                <ul>
                    <li><h1>Careers</h1></li>
                    <li>Culture and Values</li>
                    <li>Inclusion, Diversity and Equity</li>
                    <li>College Achievement plan</li>
                    <li>Alumni Community</li>
                    <li>U.S.Careers</li>
                    <li>International Careers</li>
                </ul>
                <ul>
                    <li><h1>Social Impacts</h1></li>
                    <li>People</li>
                    <li>Planet</li>
                    <li>Enviromental and Social Impact Reporting</li>
                </ul>
                <ul>
                    <li><h1>for business partners</h1></li>
                    <li>landlord support center</li>
                    <li>suppliers</li>
                    <li>corporate gifts card sales</li>
                    <li>office and foodservice coffee</li>
                </ul>
                <ul>
                    <li><h1>Order and pick up</h1></li>
                    <li>order on the app</li>
                    <li>order on the web</li>
                    <li>delivery</li>
                    <li>order and pick up options</li>
                    <li>explore and find coffee for home</li>
                    <li>International Careers</li>
                </ul>
            </div>
            <div className='hr'></div>
            <div className="footer-bottom">
                <div className="ft-bt-top">
                    <ul>
                        <li><a target='blank' href='https://open.spotify.com/'><img src={Spotify} alt="" /></a></li>
                        <li><a target='blank' href='https://www.facebook.com/?locale=az_AZ'><img src={Facebook} alt="" /></a></li>
                        <li><a target='blank' href='https://www.pinterest.com/'><img src={Pinterest} alt="" /></a></li>
                        <li><a target='blank' href='https://www.instagram.com/'><img src={Instagram} alt="" /></a></li>
                        <li><a target='blank' href='https://www.youtube.com/'><img src={Youtube} alt="" /></a></li>
                        <li><a target='blank' href='https://twitter.com/'><img src={Twitter} alt="" /></a></li>
                    </ul>
                </div>
                <div className="ft-bt-center">
                    <ul>
                        <li><a href="">privacy notice</a></li>
                        <li className='stick'>|</li>
                        <li><a href="">term of use</a></li>
                        <li className='stick'>|</li>
                        <li><a href="">do not share my personal information</a></li>
                        <li className='stick'>|</li>
                        <li><a href="">ca supply chain act</a></li>
                        <li className='stick'>|</li>
                        <li><a href="">accessibility</a></li>
                        <li className='stick'>|</li>
                        <li><a href="">cookie preferences</a></li>
                    </ul>
                    <p className='end-p'>© 2024 Starbucks Coffee Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer