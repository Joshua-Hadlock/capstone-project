export default function Home() {
    return (
        <div class="body">
            <div class="header">
                <div class="headerLeft">
                    <ul>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/register">Sign Up</a></li>
                    </ul>
                </div>
                <div class="headerMiddle">
                    <div class="logo"></div>
                </div>
                <div class="headerRight">
                    <ul>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/Login">Sign In</a></li>
                    </ul> 
                </div>
            </div>
            <div class="greeting">
                <div class="greetingText">EDUCATION YOUR DUCKLINGS WILL ENJOY
                <a href="/register"><button>SIGN UP NOW</button></a>
                <p class="login">ALREADY HAVE AN ACCOUNT LOG IN <a href="/login">HERE</a></p>
                </div>
                <div class="books"></div>
            </div>
            <div class="aboutUsSection">
                <div class="aboutUsText">
                    <h1>About Us</h1>
                    <div class="division"></div>
                    <h4>Putting Your Duckling's Future in Motion</h4>
                    <p>Here at Mcquackers we strive in giving your duckling the best possible 
                        school education no matter the age or the background we have teachers that
                        will guarantee your duckling's success in the future. We are a small corperation
                        based off of Utah back in 2022.
                    </p>
                    <a href="/about"><button>LEARN MORE</button></a>
                </div>
                <div class="aboutUsImage"></div>    
            </div>
            <footer>

            </footer>
        </div>
    )
}