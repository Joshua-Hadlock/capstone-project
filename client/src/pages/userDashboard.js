import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";


export default function Dashboard() {
    const [classes, setClasses] = useState(null);

    const getYourClasses = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/allYourClasses",
        }).then((res) => {
          setClasses(res.data)
        })
      }

    //   useEffect(() => {
    //     getYourClasses()
    //   }, [])

    return(
        <div class="body">
            <NavBar />
            <div class="dashboardGreeting">
                <div class="pfp"></div>
                <h1>Welcome back Joshua</h1>
            </div>
            <div class="dashboardNav">
                <ul>
                    <a href="#courses"><li>Courses</li></a>
                    <a href="#addCourses"><li>Add Courses</li></a>
                    <a href="#dropClass"><li>Drop Class</li></a>
                    <a href="#creditHours"><li>Credit Hours</li></a>
                    <a href="#totalCost"><li>Total Cost</li></a>
                </ul>
            </div>
            <div id="courses">
            <h1>Your Classes </h1>
                <div class="getClasses">
                    {/* <button onClick={getYourClasses}>Submit</button>
                    {classes ? <h1>Your Classes <ul>{classes.map((item)=><li key={item._id}>{item.title}</li>)}</ul></h1> : null} */}
                    <div class="class">
                        <h1>Random Class 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec.</p>
                    </div>
 
                    <div class="class">
                        <h1>Random Class 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec.</p>
                    </div>
                    <div class="class">
                        <h1>Random Class 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec.</p>
                    </div>
                    
                    
                </div>
                

            </div>
            <div id="addCourses">
                
            </div>
            <div id="dropClass">
                
            </div>
            <div id="creditHours">
                
            </div>
            <div id="totalCost">
                
            </div>
        </div>
    )
}