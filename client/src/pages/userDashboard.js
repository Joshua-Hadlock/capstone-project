import NavBar from "../components/navbar"
export default function Dashboard() {
    return(
        <div class="body">
            <NavBar />
            <div class="dashboardGreeting">
                <div class="pfp"></div>
                <h1>Welcome back Joshua</h1>
            </div>
            <div class="dashboardNav">
                <ul>
                    <a href="#courses"><li>Courses</li></a>
                    <a href="#addCourses"><li>Add Courses</li></a>
                    <a href="#dropClass"><li>Drop Class</li></a>
                    <a href="#creditHours"><li>Credit Hours</li></a>
                    <a href="#totalCost"><li>Total Cost</li></a>
                </ul>
            </div>
            <div id="courses">
                
            </div>
            <div id="addCourses">
                
            </div>
            <div id="dropClass">
                
            </div>
            <div id="creditHours">
                
            </div>
            <div id="totalCost">
                
            </div>
        </div>
    )
}