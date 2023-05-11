import axios from "axios";
import React, { useEffect, useState } from "react";

const Studentstatus = () => {

  const [complaint, setcomplaint] = useState([]);
console.log(complaint);
  useEffect(() => {
    const staff_id = localStorage.getItem("staff_id");
    axios
      .get(
        `http://localhost:2000/api/complaint/view-all-pending-complaints-staff/${staff_id}`
      )
      .then((response) => {
        if (response.data.success == true) {
          setcomplaint(response.data.data);
        }
      });
  }, []);
  return (
   
        <div className="table-responsive">
  {/*Table*/}
  <table className="table">
    {/*Table head*/}
    <thead>
      <tr>
       
        <th className="th-lg">SL NO</th>
        <th className="th-lg">Complaint</th>
        <th className="th-lg">Status</th>
      </tr>
    </thead>
    {/*Table head*/}
    {/*Table body*/}
    <tbody>
    {complaint.map((data, key) => (
            <tr>
              <th scope="row">{key+1}</th>
              <td>{data.complaint}</td>
              <td>{data.status==="0" ? 'Pending' : data.status==="1" ? "In Progress" : "Completed"}</td>
            </tr>
          ))}
    </tbody>
    {/*Table body*/}
  </table>
  {/*Table*/}
</div>
  )
}

export default Studentstatus