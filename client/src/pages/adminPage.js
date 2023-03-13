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
    const [allAddableClasses, setAllAddableClasses] = useState(null);
    const [newClassId, setNewClassId] = useState(null);
    const [newClassTitle, setNewClassTitle] = useState(null);
    const [newClassDescription, setNewClassDescription] = useState(null);
    const [newClassSchedule, setNewClassSchedule] = useState(null);
    const [newClass_number, setNewClass_number] = useState(null);
    const [newClassCapacity, setNewClassCapacity] = useState(null);
    const [newClassHours, setNewClassHours] = useState(null);
    const [newClassCost, setNewClassCost] = useState(null);

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
          const checkFailed = res.data
          if(checkFailed.hasOwnProperty('username')) {
            if(res.data.username) {
              // console.log(res.data)
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
        
    const addStudentClass = (chosenClassId) => {
        Axios({
          method: "POST",
          data: {
            selectedClass: chosenClassId,
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
            setAllAddableClasses(res.data)
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

    //   admin
    const createNewClass = () => {
        Axios({
          method: "POST",
          data: {
            id: newClassId,
            title: newClassTitle,
            description: newClassDescription,
            schedule: newClassSchedule,
            classroom_number: newClass_number,
            maximum_capacity: newClassCapacity,
            credit_hours: newClassHours,
            tution_cost: newClassCost
          },
          withCredentials: true,
          url: "/createNewClass",
        }).then((res) => console.log(res))
      }
    
    const deleteClass = (chosenClassId) => {
      Axios({
        method: "POST",
        data: {
          selectedClass: chosenClassId
        },
        withCredentials: true,
        url: "/deleteClass"

      })
    }

      

    return(
        <div class="body">
            <NavBar username={username}/>
            <div class="adminDashboardGreeting">
              <div class="blackout">
                <div class="pfp"></div>
                <h1>Welcome Admin: {username}</h1>
              </div> 
            </div>
            <div class="adminDashboardNav">
                <ul>
                    <a href="#courses"><li>Courses</li></a>
                    <a href="#createCourse"><li>Create Courses</li></a>
                    <a href="#deleteCourse"><li>Delete Course</li></a>
                    <a href="#userList"><li>User List</li></a>
                    <a href="#addCourses"><li>Add Courses</li></a>
                    <a href="#totalCost"><li>Total Cost</li></a>
                </ul>
            </div>
            <div id="courses">
            <h1>Your Classes</h1>
                {classes ?  <div class="getClasses">{classes.map((item)=><div key={item._id} class="class"><h1>{item.title}</h1><div class="line"></div><p>{item.description}</p></div>)}</div> : null}
            </div>
            <div id="createCourse">
                                    <div class="createClass">
                      <h1>Create a Class</h1>
                      <p>Please Fill Out All Fields</p>
                      <input
                        placeholder="New Class Id"
                        onChange={(e) => setNewClassId(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Title"
                        onChange={(e) => setNewClassTitle(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Description"
                        onChange={(e) => setNewClassDescription(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Schedule"
                        onChange={(e) => setNewClassSchedule(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Number"
                        onChange={(e) => setNewClass_number(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Capacity"
                        onChange={(e) => setNewClassCapacity(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Hours"
                        onChange={(e) => setNewClassHours(e.target.value)}
                        required
                      />
                      <input
                        placeholder="New Class Cost"
                        onChange={(e) => setNewClassCost(e.target.value)}
                        required
                      />

                      <button data-bs-dismiss="modal" onClick={createNewClass}>Submit</button>
                    </div>


            </div>
            <div id="deleteCourse">
                <h1>Delete a course</h1>
                <p>Note: This Action Cannot Be Reversed</p>
                <div class="classList">
                {allClasses ? <ol>{allClasses.map((item) => <li key={item.id}><h1>{item.title}</h1> <button onClick={() => deleteClass(item.id)}>Delete Class</button></li>)}</ol> : null}
            
                </div>
            </div>
            <div id="userList">
                <h1 class="topLabel">Get User List</h1>
                <div class="centerButton">
                    <button id="launchButton" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See List
                    </button>
                </div>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">User List</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="userList">
                                    <ul>
                                        <li>John<button>Delete User</button></li>
                                        <li>Joshua<button>Delete User</button></li>
                                        <li>Charmander<button>Delete User</button></li>
                                        <li>Bob<button>Delete User</button></li>
                                        <li>Isaac<button>Delete User</button></li>
                                        <li>Karl<button>Delete User</button></li>
                                        <li>Sydney<button>Delete User</button></li>
                                        <li>Jack<button>Delete User</button></li>
                                        <li>Sean<button>Delete User</button></li>
                                        <li>Harry<button>Delete User</button></li>
                                        <li>Jim<button>Delete User</button></li>
                                        <li>Pam<button>Delete User</button></li>
                                        <li>Michael<button>Delete User</button></li>
                                        <li>Stanley<button>Delete User</button></li>
                                        <li>Rylee<button>Delete User</button></li>
                                        <li>Jacob<button>Delete User</button></li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" id="saveButton" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                    </div>
            </div>
            <div id="addCourses">
                <div class="scrollDiv">
    
                    {allAddableClasses ? <ol>{allAddableClasses.map((item) => <li key={item.id}><h1>{item.title}</h1> <button onClick={() => addStudentClass(item.id)}>Add Class</button></li>)}</ol> : null}
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
            
        </div>
    )
}