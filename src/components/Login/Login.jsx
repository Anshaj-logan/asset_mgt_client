import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
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
      axios.post("http://localhost:2000/api/login/",Input).then((response)=>{
        console.log(response);
        if (response.data.success === true) {
          if (response.data.role === "1") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("staff_id", response.data.staff_id)
              sessionStorage.setItem("currentloggedin", response.data.name);
              navigate("/homestaff")
          }
          else if (response.data.role === "3") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("worker_id", response.data.worker_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate("/homeworker")
          }
          else if (response.data.role === "2") {
            console.log("jiiii");
              localStorage.setItem("name", response.data.username)
              localStorage.setItem("loginId", response.data.login_id)
              localStorage.setItem("role", response.data.role)
              localStorage.setItem("student_id", response.data.student_id)
              sessionStorage.setItem("currentloggedin", response.data.username);
              navigate('/homestudent')
          }
      }
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
          width="100%"
          height="710px"
        />
      </div>
      <div className="page">
       
          <h3>
            <br />
            Sign in
          </h3>
          <p>Sign in with your username and password</p>
      
        <form onSubmit={validation} style={{marginTop:"-56%", zIndex:"1"}}>
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
