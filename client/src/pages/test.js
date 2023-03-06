import React, { useState } from "react";
import Axios from "axios";

export default function Testing() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerAddress, setRegisterAddress] = useState("")
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
    <div className="body2">
      <div class="blackoutBody">

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
                        <li><a href="http://localhost:3001/">Trivia</a></li>
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
              <button type="button" id="launchButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create a Class
              </button>


              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     
                    <div class="createClass">
                      <h1>Create a Class</h1>
                      <input
                        placeholder="New Class Id"
                        onChange={(e) => setNewClassId(e.target.value)}
                      />
                      <input
                        placeholder="New Class Title"
                        onChange={(e) => setNewClassTitle(e.target.value)}
                      />
                      <input
                        placeholder="New Class Description"
                        onChange={(e) => setNewClassDescription(e.target.value)}
                      />
                      <input
                        placeholder="New Class Schedule"
                        onChange={(e) => setNewClassSchedule(e.target.value)}
                      />
                      <input
                        placeholder="New Class Number"
                        onChange={(e) => setNewClass_number(e.target.value)}
                      />
                      <input
                        placeholder="New Class Capacity"
                        onChange={(e) => setNewClassCapacity(e.target.value)}
                      />
                      <input
                        placeholder="New Class Hours"
                        onChange={(e) => setNewClassHours(e.target.value)}
                      />
                      <input
                        placeholder="New Class Cost"
                        onChange={(e) => setNewClassCost(e.target.value)}
                      />

                      <button data-bs-dismiss="modal" onClick={createNewClass}>Submit</button>
                    </div>
                    </div>
                    <div class="modal-footer">

                    </div>
                  </div>
                </div>
              </div>

        </div>
        </div>
    </div>
  );
}