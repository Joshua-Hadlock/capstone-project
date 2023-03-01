// in client src/app.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./style/css/style.css";


import React, { useState } from "react";

// import pages
import Testing from './pages/test';
import About from './pages/About';
import Home from './pages/home';
import PageNotFound from './pages/PageNotFound'




// Router
function App() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path='/test' element={<Testing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    )
}

export default App;