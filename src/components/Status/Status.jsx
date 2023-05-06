import axios from "axios";
import React, { useEffect, useState } from "react";

const Status = () => {
  const [complaint, setcomplaint] = useState([]);

  useEffect(() => {
    const student_id = localStorage.getItem("student_id");
    axios
      .get(
        `http://localhost:2000/api/complaint/student-added-complaints/${student_id}`
      )
      .then((response) => {
        if (response.data.success == true) {
          setcomplaint(response.data.data);
        }
      });
  }, []);
  console.log("data", complaint);
  return (
    <div className="sts">
      {/*Table*/}
      <table className="table">
        {/*Table head*/}
        <thead>
          <tr>
            <th>SL.No</th>
            <th className="th-lg">Complaint</th>
            <th className="th-lg">Current Status</th>
          </tr>
        </thead>

        <tbody>
          {complaint.map((data, key) => (
            <tr>
              <th scope="row">{key+1}</th>
              <td>{data.complaint}</td>
              <td>{data.status==="0" ? 'Pending' : data.status==="1" ? "In Progress" : "Completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Status;
