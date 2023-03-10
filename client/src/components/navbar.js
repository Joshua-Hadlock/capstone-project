import { Link } from "react-router-dom";

export default function NavBar({username}) {

    var navUsername

    function changeUsername(username) {
        navUsername = username
    }

    return (
        <div class="header">
                <div class="headerLeft">
                    <ul>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/test">Sign Up</a></li>
                    </ul>
                </div>
                <div class="headerMiddle">
                    <div class="logo"></div>
                </div>
                <div class="headerRight">
                    <ul>
                        <li><a href="http://localhost:3001/">Trivia</a></li>
                        <li><a href="/about">About</a></li>
                        <li>{username}</li>
                    </ul> 
                </div>
            </div>
    )
}