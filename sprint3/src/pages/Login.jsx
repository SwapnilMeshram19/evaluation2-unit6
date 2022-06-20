import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = ({loginUser}) => {
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("")
  const users=[{"email":"s@gmail.com","password":"swa"},{"email":"swapnil","password":"sam"}]
  
  return <div>
          <label>Email
            <input
              type={email}
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
          </label><br/>
          <label>Password
            <input
              type={password}
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </label><br/>
          <button onClick={loginUser(email,password)}>Login</button>
        </div>;
};

export default Login;
