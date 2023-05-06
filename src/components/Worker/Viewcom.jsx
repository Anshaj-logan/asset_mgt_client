
import axios from "axios";
import React, { useEffect, useState } from "react";



const Viewcom = () => {
  const [complaint, setcomplaint] = useState([]);

  const accept = (id)=>{
    console.log(id);
    axios.get(``)

    }


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
  console.log("data", complaint);
  return (
    <div>
        <div className="asset">
  {/*Table*/}
  <table className="table">
    {/*Table head*/}
    <thead>
      <tr>
        <th>SL.No</th>
        
        <th className="th-lg">Name</th>
        <th className="th-lg">Department</th>
        <th className="th-lg">Class</th>
        <th className="th-lg">Room Number</th>
        <th className="th-lg">Complaint</th>
        <th className="th-lg">Image</th>
        <th className="th-lg">Action</th>


      </tr>
    </thead>
    {/*Table head*/}
    {/*Table body*/}
    <tbody>
      {complaint.map((data,key)=>(
        <tr>
        <th scope="row">{key+1}</th>
        
        <td>{data.name}</td>
        <td>{data.department}</td>
        <td>
          {data.class}
        </td>
        <td>{data.room_number}</td>
        <td>{data.complaint}</td>
        <td><img src={`Complaint/${data.image}`} alt="" width="100" height="100" /></td>
        <td><button type="button" class="btn btn-success"
        onClick={()=>{accept(data._id)}}
        >Accept</button></td>
      </tr>

      ))}
      
      
    </tbody>
    {/*Table body*/}
  </table>
  {/*Table*/}
</div>

    </div>
  )
}

export default Viewcom