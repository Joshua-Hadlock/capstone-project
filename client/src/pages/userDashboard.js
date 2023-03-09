import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const [success, setSuccess] = useState(null);
    const [classId, setClassId] = useState(null);
    const [classes, setClasses] = useState(null);
    const [username, setUsername] = useState(null);
    const [allClasses, setAllClasses] = useState(null);
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
          console.log(res.data)
          console.log(res.data.hasOwnProperty('username'))




          const checkFailed = res.data
          if(checkFailed.hasOwnProperty('username')) {
            if(res.data.username) {
              console.log(res.data)
              setData(res.data)
              setUsername(res.data.username)
            }else {
              setData(null); 
              navigate("/login")
            }
          } else {
            setData(null); 
            navigate("/login")
          }
        });
      }
        
    const addStudentClass = () => {
        Axios({
          method: "POST",
          data: {
            selectedClass: classId,
          },
          withCredentials: true,
          url: "/addClass",
        }).then((res) => {
          setSuccess(res.data);
        })
      }
    
    const getAllAddableClasses = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/getAllAddableClasses"
        }).then((res) => {
            setAllClasses(res.data)
        })
    }
      useEffect(() => {
        getYourClasses()
        getLoginUser()
        getAllAddableClasses()
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
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item.id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p></div>)}</div> : null}
            </div>
            <div id="addCourses">
                <div class="scrollDiv">
                    <h3>Course List</h3>
                    {allClasses ? <ol>{allClasses.map((item) => <li key={item.id}>{item.title} <button>Add Class</button></li>)}</ol> : null}
                </div>
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