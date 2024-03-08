import React, { useState } from "react";
import "./Login.css";
import { act } from "react-dom/test-utils";

function Login() {
  const [action,setAction]=useState("Sign Up");

  return (
    <section className="container">
      <div className="card">
        <div className="header">
          <h1>{action}</h1>
          <div className="underline"></div>
        </div>
        <div className="inputSection">
          {action==="Login"?<div></div>:<div className="name">
            <p>Name</p>
            <input
              type="text"
              className="inputgive"
              name=""
              id=""
              placeholder="Enter your name"
            />
          </div>}
          
          <div className="email">
            <p>Email</p>
            <input
              type="email"
              className="inputgive"
              name=""
              id=""
              placeholder="Enter your email"
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input
              type="password"
              className="inputgive"
              name=""
              id=""
              placeholder="Enter your password"
            />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot">
          <a href="http://">Forgot password?</a>
        </div>}  
        <div className="button">
          <button className={action==="Login"?"btn gray":"btn"} type="submit" onClick={()=>{setAction("Sign Up")}}>SIGN UP</button>
          <button className={action==="Sign Up"?"btn gray":"btn"} type="submit" onClick={()=>{setAction("Login")}}>LOG IN</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
