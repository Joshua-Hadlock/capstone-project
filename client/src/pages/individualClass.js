import { useState, useEffect } from "react";
import Axios from "axios";
import {    useParams  } from "react-router-dom";

export default function Class() {
    const { classId } = useParams()
    const [theClass, setTheClass] = useState(null)

    const getOneClass = () => {
        Axios({
            method: "POST",
            data: {
                selectedOneCourse: classId,
              },
            withCredentials: true,
            url: "/getOneClass"
        }).then((res) => {
            setTheClass(res.data)
        })
    }

    useEffect(() => {
        getOneClass()
    }, [])

    return(
    <div className="body" style={{height:"100vh"}}>
    <div className="header">
        <div className="headerLeft">
            <ul>
                <li><a href="/help">Help</a></li>
                <li><a href="/register">Sign Up</a></li>
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
    {/* header */}
    <div class="individualClassBody">
        <div class="blackout">
            <div class="individualClass">
                {theClass ? <div>{theClass.map((item) => 
                <>
                <div class="h1BackgroundImage">
                    <h1>{item.title}</h1>
                    <p>Class Id: {item.id}</p>
                </div>
                <ol key={item.id}>
                    <li>{item.description}</li>
                    <div class="line"></div>
                    <li>Schedule: {item.schedule}</li>
                    <div class="line"></div>
                    <li>Classroom: {item.classroom_number}</li>
                    <div class="line"></div>
                    <li>Class Capacity: {item.maximum_capacity}</li>
                    <div class="line"></div>
                    <li>Credit Hours: {item.credit_hours}</li>
                    <div class="line"></div>
                    <li>Tuition: {item.tuition_cost}</li>
                    <div class="line"></div>
                </ol>
                </>)}</div> : null}
                
                {/* <ol>
                    <li>CSCI-1001</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. Posuere morbi leo urna molestie at elementum.</li>
                    <li>Schedule: mtf @2:15</li>
                    <li>Classroom: 217</li>
                    <li>Class Capacity: 20</li>
                    <li>Credit Hours: 2</li>
                    <li>$900</li>
                </ol>     */}
            </div>
        </div>


    </div>
</div>
)}

//class Id 
//class name
//class Description
//class schedule
//classroom number 
//max capacity
//credit hours
//tution cost
