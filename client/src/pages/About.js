import { useEffect, useRef } from 'react';

export default function TitlePage() {
    function parallaxEffect() {
        let mountain = document.getElementById("Mountain");
        let ducks = document.getElementById("Ducks");
    
        window.addEventListener('scroll', function() {
          var value = window.scrollY;
    
          mountain.style.top = value * 0.15 + 'px';
          ducks.style.left = value * 0.15 + 'px';
        })
      }
    
      const nightRef = useRef(null);
    
      useEffect(() => {
        const isReady = nightRef.current;
    
        if(isReady) {
          parallaxEffect()
        }
    
      }, [nightRef.current])

    return (
        <div className="body">
            <div className="header">
                <div className="headerLeft">
                    <ul>
                        <li>Help</li>
                        <li><a href="/test">Sign Up</a></li>
                    </ul>
                </div>
                <div className="headerMiddle">
                    <div className="logo"></div>
                </div>
                <div className="headerRight">
                    <ul>
                        <li><a href="http://localhost:3001/">Trivia</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Sign In</a></li>
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
            {/* artwork */}
            <div className="ArtWork">
                <img src="images/mountain.png" id="Mountain" ref={nightRef}></img>
                <img src="images/adasde.png" id="Ducks"></img>
                <div>
                    <h1>"Any bookmark worth more than a dollar is a waste of money because you could just use the dollar" <span>- Random Person</span></h1>
                    <div className='filler'></div>
                </div>
            </div>
        </div>
    )
}