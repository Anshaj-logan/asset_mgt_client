import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

const ViewstdCom = () => {

  const [complaint, setcomplaint] = useState([]);
console.log(complaint);
  useEffect(() => {   
    axios
      .get(
        "http://localhost:2000/api/complaint/view-all-pending-complaints/"
      )
      .then((response) => {
        if (response.data.success == true) {
          setcomplaint(response.data.data);
        }
      });
  }, []);

  return (
    <div>
            <div className="asset">
  {/*Table*/}
  <div className="container-fluid">
    <div style={{width:"90%",margin:"auto"}}>

   
  <table className="table">
    {/*Table head*/}
    <thead>
      <tr>
      <th className="th-lg">Name</th>
        <th className="th-lg">Department</th>
        <th className="th-lg">Class</th>
        <th className="th-lg">Room Number</th>
        <th className="th-lg">Complaint</th>
        <th className="th-lg">Image</th>
        <th className="th-lg">Status</th>
      </tr>
    </thead>
    {/*Table head*/}
    {/*Table body*/}
    <tbody>
    {complaint.map((data,key)=>(
        <tr>
       
        
        <td>{data.name}</td>
        <td>{data.department}</td>
        <td>
          {data.class}
        </td>
        <td>{data.room_number}</td>
        <td>{data.complaint}</td>
        <td><img src={`Complaint/${data.image}`} alt="" width="100" height="100" /></td>
        <td>{data.status==="0" ? <button type="button" class="btn btn-success"
        
        >Pending</button> : data.status==="1" ? <button type="button" disabled class="btn btn-success">Accepted</button> : 
        <button type="button" class="btn btn-success">Completed</button>}
          
        </td>
      </tr>

      ))}
    </tbody>
    {/*Table body*/}
  </table>
  </div>
  </div>
  {/*Table*/}
</div>
    </div>
  )
}

export default ViewstdCom