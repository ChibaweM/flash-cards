// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Signin />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
