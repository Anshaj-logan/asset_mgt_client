import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post("http://localhost:2000/api/login/",Input).then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  

  return (
    <>
      <div className="class">
        <img
          src="img/empty-classroom-due-coronavirus-pandemic (1).jpg"
          alt=""
          width="1350px"
          height="640px"
        />
      </div>
      <div className="page">
        <div className="headingsContainer">
          <h3>
            <br />
            Sign in
          </h3>
          <p>Sign in with your username and password</p>
        </div>
        <form onSubmit={validation}>
          <div className="mainContainer">
            <label htmlFor="username">Your username</label>  
            <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
            <input
              type="text"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,username:""})}}
              placeholder="Enter Username"
              name="username"
              required=""
            />
          
            <br />
            <label htmlFor="pswrd">Your password</label>
            <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
            <input
              type="password"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,password:""})}}
              placeholder="Enter Password"
              name="password"
              required=""
            />
            <div className="subcontainer">
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="remember"
                />{" "}
                Remember me
              </label>
              <p className="forgotpsd">
                {" "}
                <a href="#">Forgot Password?</a>
              </p>
            </div>
            <button type="submit">Login</button>
            {/* <p class="register">Not a member?  <a href="#">Register here!</a></p> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
