import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Classes() {
    const navigate = useNavigate();
    const [allClasses, setAllClasses] = useState(null)
    const getAllClasses = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/getAllClasses"
        }).then((res) => {
            console.log(res.data)
            setAllClasses(res.data)
        })
    }

    useEffect(() => {
        getAllClasses()
    },[])


    const navigateTo = (e) => {
        navigate(('/class/' + e.id))
    }
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
        <h1>CLASSES</h1>
        <h3>Course List</h3>
        {allClasses ? <ol>{allClasses.map((item) => <li key={item.id} onClick={(e) => {navigate(('/class/' + item.id))}}>{item.title}</li>)}</ol> : null}
    </div>
</div>
)}