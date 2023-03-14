import { useEffect, useRef } from 'react';

export default function TitlePage() {

    return (
        <div className="body">
            <div className="header">
                <div className="headerLeft">
                    <ul>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/register">Sign Up</a></li>
                    </ul>
                </div>
                <div className="headerMiddle">
                    <div className="logo"></div>
                </div>
                <div className="headerRight">
                    <ul>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Sign In</a></li>
                    </ul> 
                </div>
            </div>
            {/* header */}
            <div className="aboutGreeting">
                <div className="blackout">
                    <div className="aboutText">
                        <h1>Hey Y'all</h1>
                        <div className="devider"></div>
                        <h2>Heres a little about us</h2>
                        <p>Scroll For More</p>
                        <div className="arrow"></div>
                    </div>
                </div>
            </div>
            {/* greeting */}
            <div className="aboutDescription">
                <div className="descText">
                    <h1>About Us</h1>
                    <h3>We believe that everyone is secretly a genius and we thought that the best way to prove that is 
              to unlock hidden knowledge in their head. Originally a school project two high school students by 
              the name of Joshua Hadlock and Isaac Tellez created McQuackers. When we asked the creator of the 
              brand name why he chose McQuackers he said "Well it was just the first thing that came to mind"</h3>
                </div>
                <div className="us">
                    <div className="isaac"></div>
                    <div className="josh"></div>
                </div>
            </div>
    
        </div>
    )
}