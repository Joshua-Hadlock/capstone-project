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
          if(res.data[0].username === "FAILURE") {
            setData(null); 
            navigate("/login")
          } else if(res.data.username) {
            setData(res.data)
            setUsername(res.data)
          }else {
            setData(null); 
            // navigate("/login")
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
    
    const getAllClasses = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/getAllClasses"
        }).then((res) => {
            setAllClasses(res.data)
        })
    }
      useEffect(() => {
        getYourClasses()
        getLoginUser()
        getAllClasses()
      }, [])

      

    return(
        <div class="body">
            <NavBar />
            <div class="dashboardGreeting">
              <div class="blackout">
                <div class="pfp"></div>
                <h1>Welcome back {username}</h1>
              </div> 
            </div>
            <div class="dashboardNav">
                <ul>
                    <a href="#courses"><li>Courses</li></a>
                    <a href="#addCourses"><li>Add Courses</li></a>
                    <a href="#totalCost"><li>Total Cost</li></a>
                </ul>
            </div>
            <div id="courses">
                <h1>Your Classes</h1>
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item._id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p></div>)}</div> : null}
            </div>
            <div id="addCourses">
                <div class="scrollDiv">
    
                    {/* {allClasses ? <ol>{allClasses.map((item) => <li key={item._id}><h1>{item.title}</h1> <button>Add Class</button></li>)}</ol> : null} */}
                    <ol>
                      <li><h1>Introduction to Computer Science</h1><button>Add Class</button></li> 
                      <li><h1>Data Structures</h1><button>Add Class</button></li> 
                      <li><h1>Computer Architecture</h1><button>Add Class</button></li> 
                      <li><h1>Advanced Algorithms</h1><button>Add Class</button></li> 
                      <li><h1>Networking & Security</h1><button>Add Class</button></li> 
                      <li><h1>Object-Oriented Programming</h1><button>Add Class</button></li> 
                      <li><h1>Database Design & Management</h1><button>Add Class</button></li> 
                      <li><h1>Software Engineering</h1><button>Add Class</button></li> 
                      <li><h1>Operating Systems</h1><button>Add Class</button></li> 
                      <li><h1>Computer Graphics</h1><button>Add Class</button></li> 
                      <li><h1>Introduction to Information Systems</h1><button>Add Class</button></li> 
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
                    {/* enrolled */}
                    <div class="recentlyAdded">
                      <h1>Recently Added Classes </h1>
                      <div class="addedClasses">
                        <h1>Introduction to Computer Science</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis.</p>
                      </div>
                    </div>
                    
                </div>
            </div>
            <div id="totalCost">
              <div class="list">
                <div class="logo"></div>
                <h1>Payment Receipt</h1>
                <ul class="topPaper">
                  <li>McQuackers Education for young ducklings</li>
                  <li>4235 W 3546 Narnia Ave</li>
                  <li>Iceland</li>
                  <li>User: Joshua Hadlock</li>
                </ul>
                <div class="line"></div>
                <div class="desc">
                  <div class="desc1"><h3>Charges</h3></div>
                  <div class="desc2"><h3>Cost</h3></div>
                </div>
                <ul class="classes">
                  <li>Data Structures<p>$900</p></li>
                  <li>Computer Architecture<p>$900</p></li>
                  <li>Advanced Algorithms<p>$900</p></li>
                  <li>Networking & Security<p>$900</p></li>
                  <li>Object-Oriented Programming<p>$900</p></li>
                  <li>Database Design & Management<p>$900</p></li>
                  <li>Software Engineering<p>$900</p></li>
                  <li>Yearbook<p>$900</p></li>
                  <li>Pencils<p>$900</p></li>
                  <li>Calculator<p>$900</p></li>
                  <li>Pens<p>$900</p></li>
                  <li>Paper<p>$900</p></li>
                  <li>Pool Pass<p>$900</p></li>
                  <li>Library Pass<p>$900</p></li>
                  <li>State Tax<p>$900</p></li>
                  <li>Veterinary Tax<p>$900</p></li>
                  <li>Pond Tax<p>$900</p></li>
                  <li>Sales Tax<p>$900</p></li>
                  <li>Corporate Tax<p>$900</p></li>
                  <li>Annoyance Tax<p>$900</p></li>
                  <li>Just Because Tax<p>$900</p></li>
                  <li>Library Fee<p>$900</p></li>
                  <li>Lunch Fee<p>$900</p></li>
                  <li>Parking Fee<p>$900</p></li>
                  <li>School Fee<p>$900</p></li>
                  <li>Rec Fee<p>$900</p></li>
                  <li>Annoyance Fee<p>$900</p></li>
                  <li>Just Because Fee<p>$900000</p></li>
                  <br />
                  <h1 class="paperTotal">Total Cost: $925,200</h1>
                </ul>

                </div>
            </div>
        </div>
    )
}