import NavBar from "../components/navbar"
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const [success, setSuccess] = useState(null);
    const [classes, setClasses] = useState(null);
    const [username, setUsername] = useState(null);
    const [address, setAddress] = useState(null)
    const [allClasses, setAllClasses] = useState(null);
    const [userData, setUserData] = useState(null);
    const [totalCost, setTotalCost] = useState(918000);
    const navigate = useNavigate();
    const getYourClasses = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/allYourClasses",
        }).then((res) => {
            console.log(res)
          setClasses(res.data)
          res.data.forEach((item) => {console.log(parseFloat(item.tuition_cost.replace(/\$/,""))) 
            setTotalCost(currentCost => currentCost + parseFloat(item.tuition_cost.replace(/\$/,"")))})
        })
      }
      const getLoginUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/getLoginUser",
        }).then((res) => {
          console.log(res.data.is_admin)
          if (res.data.is_admin) {
            console.log('I ran')
            navigate('/admin')
          }
          console.log(res.data)
          // console.log(res.data.hasOwnProperty('username'))




          const checkFailed = res.data
          if(checkFailed.hasOwnProperty('username')) {
            if(res.data.username) {
              setUserData(res.data)
              setAddress(res.data.address)
              setUsername(res.data.username)
            }else {
              setUserData(null); 
              navigate("/login")
            }
          } else {
            setUserData(null); 
            navigate("/login")
          }
        });
      }
        
    const removeStudentClass = (classId) => {
      Axios({
        method: "POST",
        data: {
          selectedClass: classId
        },
        withCredentials: true,
        url: "/removeClass"
      }).then((res) => {
        getYourClasses();
        getAllAddableClasses();
      })
    }
    const addStudentClass = (classId) => {
        Axios({
          method: "POST",
          data: {
            selectedClass: classId,
          },
          withCredentials: true,
          url: "/addClass",
        }).then((res) => {
          console.log('I am very annoying')
          getYourClasses()
          getAllAddableClasses()
          this.setState({ state: this.state });
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
        getLoginUser()
        getYourClasses()
        getAllAddableClasses()
      }, [])

      

    return(
        <div class="body">
            <NavBar username={username} />
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
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item.id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p><button onClick={() => removeStudentClass(item.id)}>remove</button></div>)}</div> : null}
                {/* <div class="getClasses">
                  <div class="class">
                    <h1>Software Engineering</h1>
                    <div class="line"></div>
                    <p>"This course provides an introduction to the fundamentals of software engineering. Topics covered include software development processes, requirements engineering, software design, testing, and maintenance. The course also covers various tools and techniques for software engineering, such as software project management, version control, refactoring, and software metrics. Students will have the opportunity to apply software engineering principles in the development of a software project."</p>

                  </div>
                </div> */}
            </div>
            <div id="addCourses">
                <div class="scrollDiv">
                    {allClasses ? <ol>{allClasses.map((item) => <li key={item.id}>{item.title} <button onClick={() => addStudentClass(item.id)}>Add Class</button></li>)}</ol> : null}
                </div>
                <div class="addClass">
                    <h1>Add Class</h1>
                    <h2>{success}</h2>
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
                  <li>{address}</li>
                  <li>User: {username}</li>
                </ul>
                <div class="line"></div>
                <div class="desc">
                  <div class="desc1"><h3>Charges</h3></div>
                  <div class="desc2"><h3>Cost</h3></div>
                </div>
                <ul class="classes">
                {classes ?  <>{classes.map((item)=><li>{item.title}<p>{item.tuition_cost}</p></li>)}</> : null}
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
                  <h1 class="paperTotal">Total Cost: ${totalCost}</h1>
                </ul>

                </div>
            </div>
        </div>
    )
}