import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
import React, { useContext,useState,useEffect } from "react"
import axios from 'axios';
import { UserContext } from "../context/UserContext"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userContext, setUserContext] = useContext(UserContext)

  // useEffect(()=>{
  //   const fetchData = async () => {
  //       try {
  //           const url = 'http://localhost:5000/state/allStates';
  //           const output = await ( await fetch(url) ).json()
  //           console.log(output)
  //       }
  //       catch(err){
  //           console.log(err)
  //       }
  //   }
  //   fetchData();
  // })

  const handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:5000/auth/login`, { email,password })
      .then(res => {
        if(res.data.token){
          console.log(res.data.token);
          localStorage.setItem("scsvJWT", res.data.token)
        }
      })

    
  }

  

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <FormGroup label="Email" labelFor="email">
          <InputGroup
            id="loginemail"
            placeholder="Email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="password">
          <InputGroup
            id="loginpassword"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button
          intent="primary"
          text="Login"
          fill type="submit"
        />
      </form>
    </>
  )
}

export default Login
