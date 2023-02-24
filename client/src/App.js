// in client src/app.js
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom"
import "./style/css/style.css";


import React, { useState } from "react";

// import pages
import Testing from './pages/test';




// Router
function App() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Testing />}></Route>
        </Routes>
      </Router>
    )
}

export default App;