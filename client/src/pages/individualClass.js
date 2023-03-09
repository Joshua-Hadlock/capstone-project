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
    <div className="body">
    <div className="header">
        <div className="headerLeft">
            <ul>
                <li><a href="/help">Help</a></li>
                <li><a href="/test">Sign Up</a></li>
            </ul>
        </div>
        <div className="headerMiddle">
            <div className="logo"></div>
        </div>
        <div className="headerRight">
            <ul>
                <li><a href="http://localhost:3001/">Trivia</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Sign In</a></li>
            </ul> 
        </div>
    </div>
    {/* header */}
    <div>
        <h1>CLASS</h1>
        {theClass ? <ol>{theClass.map((item) => <li key={item._id}>{item.title}</li>)}</ol> : null}
    </div>
</div>
)}