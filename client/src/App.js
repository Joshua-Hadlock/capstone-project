// in client src/app.js
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom"
import "./style/css/style.css";


import React, { useState } from "react";

// import pages
import Testing from './pages/test';
import TitlePage from './pages/titlePage';




// Router
function App() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Testing />}></Route>
          <Route exact path="/title" element={<TitlePage />}></Route>
        </Routes>
      </Router>
    )
}

export default App;