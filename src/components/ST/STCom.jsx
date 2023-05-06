import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const STCom = () => {
  const [inputs, setInputs] = useState({
    
    name:"",
    class:"",
    email:"",
    area:"",
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
    if(!values.area){
      error.area ="Enter Your Department"
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
      axios.post('http://localhost:2000/',inputs).then((data)=>{
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
         <div>
        
        <div class="container">
  <div class="row mx-0 justify-content-center">
    <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
        <br/><br/><br/><br/><br/><br/>
      <form 
        method="POST"
        class="w-100 rounded p-4 border bg-white"
        action="https://herotofu.com/start"
        enctype="multipart/form-data"
      >
        <p>Complaint!!</p>
        <span style={{color:"red"}} > {formErrors.department? formErrors.department :""}</span>
          <input
            
            type="text"
            class="form-control"
            placeholder="Department"
            name="department"
            value={inputs.department || ""}
            onChange={setRegister} 
            onClick={()=>{setformErrors({...formErrors,department:""})}}
          />
          <span style={{color:"red"}} > {formErrors.class? formErrors.class :""}</span>
          <input
           
            type="text"
            class="form-control"
            placeholder="Class"
            name="class"
            value={inputs.class || ""}
            onChange={setRegister} 
            onClick={()=>{setformErrors({...formErrors,class:""})}}
          />
          <span style={{color:"red"}} > {formErrors.room_no? formErrors.room_no :""}</span>
          <input
            
            type="text"
            class="form-control"
            placeholder="Room Number"
            name="room_no"
            value={inputs.room_no || ""}
            onChange={setRegister} 
            onClick={()=>{setformErrors({...formErrors,room_no:""})}}
          />
          <span style={{color:"red"}} > {formErrors.staff_name? formErrors.staff_name :""}</span>
          <input
           
            type="text"
            class="form-control"
            placeholder="Staff Name"
            name="staff_name"
            value={inputs.staff_name || ""}
            onChange={setRegister} 
            onClick={()=>{setformErrors({...formErrors,staff_name:""})}}
          />
        <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" placeholder='Complaint'></textarea>
  </div>
  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>

        <div class="mb-4">
          <button type="submit" class="btn btn-primary px-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default STCom