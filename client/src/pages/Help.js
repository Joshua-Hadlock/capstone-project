export default function Help() {
    return (
        <div class="body">
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
            {/* Header */}
            <div class="helpGreeting">
                <div class="aside">
                    
                </div>
                <div class="helpContent">
                    <div class="helpImage">
                        <div class="helpImageBlackout">
                            <h1>Help</h1>
                        </div>
                    </div>   
                    <div class="icons">
                        <div class="helpChat"></div>
                        <div class="flag"></div>
                        <div class="email"></div>
                        <div class="start"></div>
                    </div>
                    
                </div>  
            </div>
            
        </div>
    )
}