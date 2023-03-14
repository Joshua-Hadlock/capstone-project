import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Classes() {
    const navigate = useNavigate();
    const [allClasses, setAllClasses] = useState(null)
    const [searchFor, setSearchFor] = useState(null)
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
    const queriedClassSearch = () => {
        if (searchFor === '') {
            getAllClasses()
        } else {
        Axios({
            method: "POST",
            data: {
               searchClassName: searchFor
            },
            withCredentials: true,
            url: "/findClass"
        }).then((res) => {
            setAllClasses(res.data)
        })
    }}

    useEffect(() => {
        getAllClasses()
    },[])

    return(
    <div className="body" style={{height: "100%"}}>
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
                <li><a href="/">Home</a></li>
                <li><a href="/login">Sign In</a></li>
            </ul> 
        </div>
    </div>
    {/* header */}
    <div class="dFlex">
        <div class="classList">
            <h1>Class List</h1>
        <input type='search' placeholder="search for class" onChange={(e) => setSearchFor(e.target.value)}></input> <button onClick={queriedClassSearch}>Search</button>
            {allClasses ? <ol>{allClasses.map((item) => <li key={item.id} onClick={(e) => {navigate(('/class/' + item.id))}}>{item.title}</li>)}</ol> : null}
            {/* <input type="text" placeholder="Search For Class"></input><button>Search</button>
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
            </ol> */}
            
        </div>
        <div class="teachers">
            <h1 class="topTeachers">Meet Our Staff</h1>
            <div class="pictures">
                <div class="daffy"><h1 class="daffyH1">Mr. Duck</h1><p>Is our system and analysis and design teacher he is one of our top teachers and is responsible for 1,200 ducklings recieving their Masters degree </p></div>
                <div class="daisy"><h1 class="daffyH1">Ms. Duck</h1><p>Is our Machine Learning teacher she is one of the first female teachers *cough* only female teacher. </p></div>
                <div class="scrooge"><h1 class="daffyH1">Mr. Duck</h1><p>Is our Introduction to Computer Science teacher, apart from being the principle as well he is one of the first teachers here at McQuackers.</p></div>
                <div class="donald"><h1 class="daffyH1">Mr. Duck</h1><p>Is our Computer Vision teacher he is one of the best computer teachers.</p></div>
            </div>
        </div>
    <div>
    </div>
    
</div>
</div>
)}