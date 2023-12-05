import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { CTA, Navbar } from "./components";
import {
  Blog,
  
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import Signin from "./components/Signin";
import Home from "./components/navbar/home/Home";
import Signup from "./components/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            {""}
            <Route exact path="/Login" element={<Signin />}>in sign in page</Route>
            <Route exact path = "/signup" element = {<Signup/>}>in sign up page </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
