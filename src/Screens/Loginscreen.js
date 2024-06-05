import React, { useState, useEffect } from "react";
import axios from "axios";
function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



  async function Login() {
    const user = {
      email,
      password
    };
  
    try {
      const response = await axios.post('/api/users/login', user);
      const result = response.data; // Accessing the response data property
  
      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href = '/home';
      alert("Login SuccesFull")
    } catch (error) {
      console.log(error);
      alert("invalid Password !!!!!")
    }
  }
  


  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="bs">
          <h2>Login</h2>

          <b/>
          <input
            type="text"
            className="from-control"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />

          <input
            type="password"
            className="from-control"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />

          <button
            className="btn btn-primary rounded-pill mt-3 mb-3"
            onClick={Login}
          >
            Login
          </button>
          <br />
          <a className="decoration" style={{ color: "black"}} href="/register">
            Click Here To registration
          </a>
        </div>
      </div>
    </div>
  );
}
export default Loginscreen;

