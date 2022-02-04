import { useCallback, useContext, useEffect, useState } from "react";

import Index from "./components/index";
import AuthPage from "./components/authPage";
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
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage/>} />
        {/* <Route path="/index" element={<Index/>} /> */}
      </Routes>
    </Router>
    
    </>
    
  ):(
    <Index/>
  )
}

export default App;
