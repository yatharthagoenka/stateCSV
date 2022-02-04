import { Button, Callout, FormGroup, InputGroup } from "@blueprintjs/core"
import React, { useContext, useState } from "react"
import axios, { AxiosResponse } from 'axios';
import { UserContext } from "../context/UserContext"


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userContext, setUserContext] = useContext(UserContext)
  
  const handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:5000/auth/register`, { email,password })
      .then(res => {
        console.log(res);
        localStorage.setItem("scsvJWT", res.data.token)
        setUserContext(oldValues => {
          return { ...oldValues, token: res.data.token }
        })
      })
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <FormGroup label="Set Email" labelFor="email">
          <InputGroup
            id="email"
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup label="Set Password" labelFor="password">
          <InputGroup
            id="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button intent="primary" text="Register" fill type="submit" />
      </form>
    </>
  )
}

export default Register
