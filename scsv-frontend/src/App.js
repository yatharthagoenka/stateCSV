import { useCallback, useContext, useEffect, useState } from "react";

import Index from "./components/index";
import Header from "./components/header";
import AuthPage from "./components/authPage";
import Add from "./components/add";
import { UserContext } from "./context/UserContext";

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  const [userContext, setUserContext] = useContext(UserContext);


  return !localStorage.getItem("scsvJWT")?(
    <AuthPage/>
  ):(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/add" element={<Add/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App;
