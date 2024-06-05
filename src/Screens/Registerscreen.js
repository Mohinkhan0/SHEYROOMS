import React, { useState, useEffect } from "react";
 
import axios from "axios";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");


 async function register() {
    if (password == cpassword) 
      {
      const user={
        name,
        email,
        password,
      }
      try {
        
         const result = await axios.post('/api/users/register' , user).data
        

         setname('');
         setemail('');
         setpassword('');
         setcpassword('');

      } catch (error) {
        console.log(error)
       
      }
    } 
    else 
    {
      alert("passwords not matched");
    }

    alert("Registration Succesful");
  }

  return (
  <div> 
  
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="bs">
          <h2>Register</h2>
          <input
            type="text"
            className="from-control"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br />
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
          <input
            type="password"
            className="from-control"
            placeholder="confirm password"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />

          <button
            className="btn btn-primary rounded-pill mt-3 mb-3"
            onClick={register}
          >
            REGISTER
          </button>
          <br />
          <a className="decoration" style={{ color: "black" }} href="/login">
            Click Here To Login
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Registerscreen;
