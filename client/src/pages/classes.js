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
    <div className="body" style={{height: "100vh"}}>
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
    <div class="dFlex">
        <div class="classList">
            {/* {allClasses ? <ol>{allClasses.map((item) => <li key={item.id} onClick={(e) => {navigate(('/class/' + item.id))}}>{item.title}</li>)}</ol> : null} */}
            <ol>
                <li>Introduction to Computer Science</li>
                <li>Data Structures</li>
                <li>Computer Architecture</li>
                <li>Advanced Algorithms</li>
                <li>Networking & Security</li>
                <li>Object-Oriented Programming</li>
                <li>Database Design & Management</li>
                <li>Software Engineering</li>
                <li>Operating Systems</li>
                <li>Computer Graphics</li>
                <li>Software Testing & Verification</li>
                <li>Compiler Design</li>
                <li>Artificial Intelligence</li>
                <li>Computer Vision</li>
                <li>Systems Programming</li>
                <li>Machine Learning</li>
                <li>Parallel Computing</li>
                <li>Introduction to Information Systems</li>
                <li>Computer Networking</li>
                <li>Database Design and Management</li>
                <li>Web Design and Development</li>
                <li>Systems Analysis and Design</li>
            </ol>
            
        </div>
        <div class="classSearch">
            <input type="text"></input>
        </div>
    </div>
    
</div>
)}