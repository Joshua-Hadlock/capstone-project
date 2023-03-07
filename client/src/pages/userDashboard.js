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
            console.log(res)
          setClasses(res.data)
        })
      }
      useEffect(() => {
        getYourClasses()
      }, [])
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
                <h1>Your Classes</h1>
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item._id} class="class"><h1>{item.title}</h1><p>{item.description}</p></div>)}</div> : null}
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