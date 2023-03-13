import React, { useState } from "react";
import Axios from "axios";
import NavBar from "../components/navbar";

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
  const [allClasses, setAllClasses] = useState(null);

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

  // const createNewClass = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       id: newClassId,
  //       title: newClassTitle,
  //       description: newClassDescription,
  //       schedule: newClassSchedule,
  //       classroom_number: newClass_number,
  //       maximum_capacity: newClassCapacity,
  //       credit_hours: newClassHours,
  //       tution_cost: newClassCost
  //     },
  //     withCredentials: true,
  //     url: "/createNewClass",
  //   }).then((res) => console.log(res))
  // }

  const getAllClasses = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/getAllClasses"  
  }).then((res) => {
    setAllClasses(res.data)
  })
}

  return (
    <div className="body2">
      <div className="blackoutBody">

            <div className="header">
                <div className="headerLeft">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/help">Help</a></li>
                    </ul>
                </div>
                <div className="headerMiddle">
                    <div className="logo"></div>
                </div>
                <div className="headerRight">
                    <ul>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Sign In</a></li>
                    </ul> 
                </div>
            </div>
            {/* Header */}
        <div class="signUpContent">

          <div class="register">
            <h1>Register</h1>
            <input
              placeholder="Username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              placeholder="Password"
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
          <div class="terms">
            <button>Read Terms and Conditions</button>
          </div>
          <div class="readTerms">
            <input class="checkbox" type="checkbox"/>
            <p>I have read and accept these terms and conditions</p> 
          </div>
          
          <p>Already have an account ? log in <a href="/login">here</a></p>
          {/* modal */}

          </div>
      </div>
    </div>
  );
}