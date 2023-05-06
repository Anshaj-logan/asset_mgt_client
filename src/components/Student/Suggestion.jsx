import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Suggestion = () => {
  const student_id = localStorage.getItem("student_id")
  const [inputs, setInputs] = useState({
    department: "",
    class: "",
    room_no: "",
    student_id: student_id,
  });
  
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const validate = (values) => {
    var error = {};
    if (!values.department) {
      error.department = "Enter Department";
    }
    if (!values.class) {
      error.class = "Enter Class";
    }
    if (!values.room_no) {
      error.room_no = "Enter Room Number";
    }
    

    return error;
  };

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    setformErrors(validate(inputs));
    setIssubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("http://localhost:2000/api/suggestion/add-suggestion", inputs)
        .then((data) => {
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
        })
        .catch((err) => {
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
        });
    }
  };
  return (
    <div>
      <div class="container">
        <div class="row mx-0 justify-content-center">
          <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ToastContainer />
      <form 
        onSubmit={registerSubmit}k class="w-100 rounded p-4 border bg-white">
              <p>Suggestion!!</p>
              <span style={{ color: "red" }}>
                {" "}
                {formErrors.department ? formErrors.department : ""}
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Department"
                name="department"
                value={inputs.department || ""}
                onChange={setRegister}
                onClick={() => {
                  setformErrors({ ...formErrors, department: "" });
                }}
              />
              <span style={{ color: "red" }}>
                {" "}
                {formErrors.class ? formErrors.class : ""}
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Class"
                name="class"
                value={inputs.class || ""}
                onChange={setRegister}
                onClick={() => {
                  setformErrors({ ...formErrors, class: "" });
                }}
              />
              <span style={{ color: "red" }}>
                {" "}
                {formErrors.room_no ? formErrors.room_no : ""}
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Roomnumber"
                name="room_no"
                value={inputs.room_no || ""}
                onChange={setRegister}
                onClick={() => {
                  setformErrors({ ...formErrors, room_no: "" });
                }}
              />
             

              {/* <input name="name" type="text" class="form-control" placeholder="Complaint"/> */}
              <div class="form-outline mb-4">
                <textarea
                  class="form-control"
                  id="form4Example3"
                  rows="4"
                  placeholder="Suggetion"
                  name="suggetion"
                  value={inputs.suggetion || ""}
                  onChange={setRegister} 
                ></textarea>
                {/* <label class="form-label" for="form4Example3">Message</label> */}
              </div>

              <div class="mb-4">
                <button type="submit" class="btn btn-primary px-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
