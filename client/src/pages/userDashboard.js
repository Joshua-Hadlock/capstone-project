import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const [success, setSuccess] = useState(null);
    const [classId, setClassId] = useState(null);
    const [classes, setClasses] = useState(null);
    const [username, setUsername] = useState(null);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
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
      const getLoginUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/getLoginUser",
        }).then((res) => {
          if(res.data[0].username === "FAILURE") {
            setData(null); 
            navigate("/login")
          } else if(res.data.username) {
            setData(res.data)
            setUsername(res.data.username)
          }else {
            setData(null); 
            navigate("/login")
          }
        });
      }

      useEffect(() => {
        getYourClasses()
        getLoginUser()
      }, [])


    
    return(
        <div class="body">
            <NavBar />
            <div class="dashboardGreeting">
                <div class="pfp"></div>
                <h1>Welcome back {username}</h1>
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
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item._id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p></div>)}</div> : null}
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