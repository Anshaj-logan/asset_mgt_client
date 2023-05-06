import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';


const StudComplaint = () => {
  const navigate = useNavigate()
  const student_id = localStorage.getItem("student_id")
  const [inputs, setInputs] = useState({
    
    department:"",
    class:"",
    room_no:"",
    student_id:student_id,
   
  });
  const [file,setFile]=useState("")
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  

  const validate = (values)=>{
    var error = {}
    if(!values.department){
      error.department ="Enter Department"
    }
    if(!values.class){
      error.class ="Enter Class"
    }
    if(!values.room_number){
      error.room_number ="Enter Room Number"
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
      if(file){
        const data=new FormData();
        const filename=file.name
        data.append("name",filename)
        data.append("file",file)
        console.log("fileDAta",data);
        axios.post("http://localhost:2000/api/complaint/upload-image",data)
        .then((response)=>{
            console.log(response)
        })
    }
      axios.post('http://localhost:2000/api/complaint/add-complaint',inputs).then((data)=>{
        console.log(data);
        navigate('/homestudent')
        // console.log(data.response.data.message);
       
        
       
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
        
        <div class="container">
  <div class="row mx-0 justify-content-center">
    <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
        <br/><br/><br/><br/><br/><br/>
        <ToastContainer />
      <form 
        onSubmit={registerSubmit}
        class="w-100 rounded p-4 border bg-white"
       
        
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
          <span style={{color:"red"}} > {formErrors.room_number? formErrors.room_number :""}</span>
          <input
           
            type="text"
            class="form-control"
            placeholder="Roomnumber"
            name="room_number"
            value={inputs.room_number || ""}
            onChange={setRegister} 
            onClick={()=>{setformErrors({...formErrors,room_number:""})}}
          />
      

        <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" placeholder='Complaint'
    name="complaint"
    value={inputs.complaint || ""}
    onChange={setRegister} 
    ></textarea>
  </div>
  
    <input type="file" class="form-control-file" id="exampleFormControlFile1"
     name="file"
     value={inputs.file || ""}
     onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files[0]);setInputs({...inputs, image: e.target.files[0].name });}}
    />
 

        <div class="mb-4">
          <button type="submit" class="btn btn-primary px-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default StudComplaint