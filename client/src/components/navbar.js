import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export default function NavBar({username}) {
    const navigate = useNavigate()
    const [message, setMessage] = useState(null)
    const logout = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/logout",
        }).then((res) => {
          console.log(res.data);
          setMessage(res.data);
          navigate('/login')
        });
      }
    console.log(username)
    return (
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
                    <div class="dropdown">
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/Login">Sign In</a></li>
                        
                        <li style={{marginLeft:"10px"}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{username}</li>
                        <ul class="dropdown-menu">

                        <div class="logout">
                            <h1 class="logoutH1" style={{fontSize:"15px", textAlign:"center", textTransform:'none'}}>Logout</h1>
                            <button style={{marginLeft:"45px",fontSize:"10px", width:"70px", height:"20px", border:"none", borderRadius:"5px", backgroundColor:"#FDBC58"}} class="logoutButton" onClick={logout}>Here</button>
                            {message ? <h1>{message}</h1> : null}
                        </div>

                        </ul>
                        </div>
                    </ul> 
                </div>
            </div>
    )
}