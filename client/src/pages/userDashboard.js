import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";


export default function Dashboard() {
    const [success, setSuccess] = useState(null);
    const [classId, setClassId] = useState(null);
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
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item._id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p></div>)}</div> : null}
            </div>
            <div id="addCourses">
                <div class="scrollDiv">
                    <h3>Course List</h3>
                    <ol>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                        <li>placerat in <button>Add Class</button></li>
                    </ol>
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