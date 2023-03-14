// in client src/app.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import axios from "axios";
import "./style/css/style.css";


import React, { useState } from "react";

// import pages
import Testing from './pages/test';
import About from './pages/About';
import Home from './pages/home';
import PageNotFound from './pages/PageNotFound'
import Help from './pages/Help'
import Login from './pages/Login'
import Dashboard from './pages/userDashboard'
import Admin from './pages/adminPage'

import Classes from './pages/classes';
import Class from './pages/individualClass'
import NavBar from "./components/navbar";



// Router
function App() {
  // axios.defaults.baseURL = 'http://localhost:4001';
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path='/register' element={<Testing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard/:username" element={<Dashboard />}></Route>
          <Route path="/classes" element={<Classes />}></Route>
          <Route path="/class/:classId" element={<Class />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    )
}

export default App;