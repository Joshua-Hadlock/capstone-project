export default function Help() {
    return (
        <div class="body">
            <div className="header">
                <div className="headerLeft">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/test">Sign Up</a></li>
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
            {/* Header */}
            <div class="helpGreeting">
                <div class="aside">
                    <h1>FAQ</h1>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" id="buttonColor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How much is tuition ?
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">We charge for most classes $900 but the prices vary on the different classes.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" id="buttonColor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                When does the school year start ?
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Just like any other schools we start on August and end in May.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" id="buttonColor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Who are notable alumni ?
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">We had Ronald McDuck, Donald Duck, Daffy Duck, Count Duckula and Duck Dodgers, Scrooge McDuck.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" id="buttonColor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Why Ducks ?
                            </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Because we care about ducks as much as humans</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" id="buttonColor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                What grades are there ?
                            </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">From 7th grade all the way to 12th grades are available to register.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="helpContent">
                    <div class="helpImage">
                        <div class="helpImageBlackout">
                            <h1>Help</h1>
                        </div>
                    </div>   
                    <div class="icons">
                        <div class="helpChat"><h5>Connect with an expert</h5></div>
                        <div class="flag"><h5>Report</h5></div>
                        <div class="email"><h5>To Gmail</h5></div>
                        <div class="start"><h5>Where to start</h5></div>
                        <div class="shield"><h5>Privacy and Security</h5></div>
                    </div>
                    <div class="icons">
                        <div class="contact"><h5>Contact Us</h5></div>
                        <div class="locate"><h5>Locate an office</h5></div>
                        <div class="merch"><h5>Buy Merchandise</h5></div>
                        <div class="question"><h5>Questions</h5></div>
                        <div class="donate"><h5>Donate</h5></div>
                    </div>
                    
                </div>  
                
            </div>
            <div class="footer">
                
            </div>           
        </div>
    )
}