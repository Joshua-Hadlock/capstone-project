import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";


export default function Dashboard() {
    const [success, setSuccess] = useState(null);
    const [classId, setClassId] = useState(null);
    const [classes, setClasses] = useState(null);

    const addStudentClass = () => {
        Axios({
          method: "POST",
          data: {
            selectedClass: classId,
          },
          withCredentials: true,
          url: "addClass",
        }).then((res) => {
          setSuccess(res.data);
        })
      }

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
                        <div class="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec.</p>
                    </div>
                  
                </div>
                

            </div>
            <div id="addCourses">
                <div class="addClass">
                    <h1>Add Class</h1>
                    <h2>{success}</h2>
                    <input
                    placeholder="Class Id"
                    onChange={(e) => setClassId(e.target.value)}
                    />
                    <button onClick={addStudentClass}>Submit</button>
                </div> 
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