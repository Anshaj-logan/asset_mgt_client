import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffRegistration = () => {
  const [inputs, setInputs] = useState({
    
    name:"",
    phone_no:"",
    email:"",
    department:"",
    username: "",
    password: "",
  });
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    if(!values.name){
      error.name ="Enter Your Name"
    }
    if(!values.phone_no){
      error.phone_no ="Enter Your PhoneNumber"
    }
    if(!values.email){
      error.email ="Enter Your Email"
    }
    if(!values.department){
      error.department ="Enter Your Department"
    }
    return error
  }


  const setRegister = (event) => {

    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    setformErrors(validate(inputs))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post('http://localhost:2000/api/register/staff',inputs).then((data)=>{
      console.log(data);
      // console.log(data.response.data.message);
      toast(data.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
     
    }).catch((err)=>{
      console.log(err);
      toast(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }
  };
  return (
    <div>
    <div className="container-fluid" id="log">
<div className="row">
<img
  src="img/empty-classroom-due-coronavirus-pandemic (1).jpg"
  height="700px"
  width="950px"
/>
{/* <div className="reg"></div>
<div className="col-sm-4" /> */}
</div>
<div className="row">
{/* <div className="col-sm-4" /> */}
<div className="form-group">
<ToastContainer />
  <form onSubmit={registerSubmit}>
    <br />
    <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
    <input
      type="text"
      className="form-control"
      placeholder="Name"
      required=""
      name="name"
      value={inputs.name || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,name:""})}}
    />
    <br />
    <span style={{color:"red"}} > {formErrors.email? formErrors.email :""}</span>
    <input
      type="email"
      className="form-control"
      placeholder="Email"
      required=""
      name="email"
      value={inputs.email || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,email:""})}}
      
    />
    <br />
    <span style={{color:"red"}} > {formErrors.department? formErrors.department :""}</span>
    <input
      type="text"
      className="form-control"
      placeholder="Department"
      required=""
      name="department"
      value={inputs.department || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,department:""})}}
    />
    <br />
    <span style={{color:"red"}} > {formErrors.phone_no? formErrors.phone_no :""}</span>
    <input
      type="text"
      className="form-control"
      placeholder="Phone Number"
      required=""
      name="phone_no"
      value={inputs.phone_no || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,phone_no:""})}}
    />
    <br />
    <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
    <input
      type="text"
      className="form-control"
      placeholder="username"
      required=""
      name="username"
      value={inputs.username || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,username:""})}}
    />
    <br />
    <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
    <input
      type="text"
      className="form-control"
      placeholder="Password"
      required=""
      name="password"
      value={inputs.password || ""}
      onChange={setRegister} 
      onClick={()=>{setformErrors({...formErrors,password:""})}}
    />
    <br />
    {/* <input
      type="text"
      className="form-control"
      placeholder="Confirm Password"
      required=""
      name="cnf_Password"
      value={inputs.cnf_Password || ""}
      onChange={setRegister} 
    />
    <br /> */}
    <p>
      <button type="submit" className="btn btn-success">
        SUBMIT
      </button>
    </p>
  </form>
</div>
</div>
</div>

</div>
  )
}

export default StaffRegistration