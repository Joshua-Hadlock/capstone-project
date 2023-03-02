import React, { useState } from "react";
import Axios from "axios";

export default function Testing() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerAddress, setRegisterAddress] = useState("")
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [userList, setUserList] = useState(null);
  const [logins, setLogins] = useState(null);
  const [success, setSuccess] = useState(null);
  const [classId, setClassId] = useState(null);
  const [classes, setClasses] = useState(null);
  const [newClassId, setNewClassId] = useState(null);
  const [newClassTitle, setNewClassTitle] = useState(null);
  const [newClassDescription, setNewClassDescription] = useState(null);
  const [newClassSchedule, setNewClassSchedule] = useState(null);
  const [newClass_number, setNewClass_number] = useState(null);
  const [newClassCapacity, setNewClassCapacity] = useState(null);
  const [newClassHours, setNewClassHours] = useState(null);
  const [newClassCost, setNewClassCost] = useState(null);

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };


  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
        phone: registerPhone,
        address: registerAddress
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
        <input
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="Phone"
          onChange={(e) => setRegisterPhone(formatPhoneNumber(e.target.value) )}
        />
        <input
          placeholder="Address"
          onChange={(e) => setRegisterAddress(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        {registerPhone || 'must put a valid phone number'}
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
      <div>
        <h1>Create a Class</h1>
        <input
          placeholder="newClassId"
          onChange={(e) => setNewClassId(e.target.value)}
        />
        <input
          placeholder="newClassTitle"
          onChange={(e) => setNewClassTitle(e.target.value)}
        />
        <input
          placeholder="newClassDescription"
          onChange={(e) => setNewClassDescription(e.target.value)}
        />
        <input
          placeholder="newClassSchedule"
          onChange={(e) => setNewClassSchedule(e.target.value)}
        />
        <input
          placeholder="newClass_number"
          onChange={(e) => setNewClass_number(e.target.value)}
        />
        <input
          placeholder="newClassCapacity"
          onChange={(e) => setNewClassCapacity(e.target.value)}
        />
        <input
          placeholder="newClassHours"
          onChange={(e) => setNewClassHours(e.target.value)}
        />
        <input
          placeholder="newClassCost"
          onChange={(e) => setNewClassCost(e.target.value)}
        />

        <button onClick={createNewClass}>Submit</button>
      </div>

    </div>
  );
}