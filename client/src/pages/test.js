import React, { useState } from "react";
import Axios from "axios";

export default function Testing() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [userList, setUserList] = useState(null);
  const [logins, setLogins] = useState(null);
  const [success, setSuccess] = useState(null);
  const [classId, setClassId] = useState(null);
  const [classes, setClasses] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
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


  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <h2>{logins}</h2>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get Login User</h1>
        <button onClick={getLoginUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
      <div>
        <h1>Get All User</h1>
        <button onClick={getAllUsers}>Submit</button>
        {userList ? <h1>User List <ul>{userList.map((item)=><li key={item._id}>{item.username}</li>)}</ul></h1> : null}
      </div>
      <div>
        <h1>Logout</h1>
        <button onClick={logout}>Submit</button>
        {message ? <h1>{message}</h1> : null}
      </div>
      <div>
        <h1>Add Class</h1>
        <h2>{success}</h2>
        <input
          placeholder="classId"
          onChange={(e) => setClassId(e.target.value)}
        />
        <button onClick={addStudentClass}>Submit</button>
      </div>
      <div>
        <h1>Get your classes</h1>
        <button onClick={getYourClasses}>Submit</button>
        {classes ? <h1>Your Classes <ul>{classes.map((item)=><li key={item._id}>{item.title}</li>)}</ul></h1> : null}
      </div>

    </div>
  );
}