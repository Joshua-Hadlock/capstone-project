import React, { useState } from "react";
import Axios from "axios";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [logins, setLogins] = useState(null);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [userList, setUserList] = useState(null);
  const [success, setSuccess] = useState(null);
  const [classId, setClassId] = useState(null);
  const [classes, setClasses] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "/login",
    }).then((res) => setLogins(res.data));
  };

  const getLoginUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/getLoginUser",
    }).then((res) => {
      if(res.data.username)
        setData(res.data)
      else
        setData(null); 
      console.log(res.data);
    });
  }
  const getAllUsers = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/getAllUsers",
    }).then((res) => {
      console.log(res.data);
      setUserList(res.data);
    });
  }
  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/logout",
    }).then((res) => {
      console.log(res.data);
      setMessage(res.data);
    });
  }
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

    return(
          <div class="body">
                <div class="header">
                <div class="headerLeft">
                    <ul>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/test">Sign Up</a></li>
                    </ul>
                </div>
                <div class="headerMiddle">
                    <div class="logo"></div>
                </div>
                <div class="headerRight">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="http://localhost:3001/">Trivia</a></li>
                        <li><a href="/about">About</a></li>
                    </ul> 
                </div>
            </div>
            {/* header */}
            <div class="loginContent">
              <div class="loginForm">
                <h1>Login</h1>
                <h2>{logins}</h2>
                <input class="input1"
                  placeholder="Username"
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input class="input2"
                  placeholder="Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <p>forgot your password click <a href="">here</a></p>
                <a href="/dashboard"><button onClick={login}>Submit</button></a>
                
              </div>
              <div class="loginImage">
                <div class="blackout">
                  <h1>Welcome Back !</h1>
                  <p>Dont have an account ? sign up and see all benefits </p>
                  <a href="/test"><button>Sign Up</button></a>
                </div>
              </div>
              </div>
          </div> 
    )
}


                      {/* <div class="loginUser">
            <h1>Get Login User</h1>
            <button onClick={getLoginUser}>Submit</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
          </div>
          <div class="getUser">
            <h1>Get All User</h1>
            <button onClick={getAllUsers}>Submit</button>
            {userList ? <h1>User List <ul>{userList.map((item)=><li key={item._id}>{item.username}</li>)}</ul></h1> : null}
          </div>
          <div class="logout">
            <h1>Logout</h1>
            <button onClick={logout}>Submit</button>
            {message ? <h1>{message}</h1> : null}
          </div>
          <div class="getClasses">
            <h1>Get your classes</h1>
            <button onClick={getYourClasses}>Submit</button>
            {classes ? <h1>Your Classes <ul>{classes.map((item)=><li key={item._id}>{item.title}</li>)}</ul></h1> : null}
          </div>

          <div class="addClass">
            <h1>Add Class</h1>
            <h2>{success}</h2>
            <input
              placeholder="Class Id"
              onChange={(e) => setClassId(e.target.value)}
            />
            <button onClick={addStudentClass}>Submit</button>
          </div> */}