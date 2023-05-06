
import React, { useEffect, useState } from "react";
import HeaderWorker from "../Header/HeaderWorker";
import { useNavigate } from "react-router";
import axios from 'axios';

const ViewStudentCom = () => {
    const [complaint, setcomplaint] = useState([]);
    console.log(complaint);
    const navigate = useNavigate()
    const worker_id = localStorage.getItem("worker_id")

    const accept = (id,cId)=>{
        console.log(id);
        axios.get(`http://localhost:2000/api/complaint/complete-complaints/${id}/${cId}`).then((data)=>{
            console.log(data);
            navigate('/students-accepted-complaint')
            window.location.reload()

        })
       
        }

    useEffect(() => {
   
        axios.get(`http://localhost:2000/api/complaint/view-all-worker-accepted-complaints/${worker_id}`)
          .then((response) => {
            if (response.data.success === true) {
              setcomplaint(response.data.data);
            }
          });
      },[]);
    return (
       
    <div>
    <div className="asset">
      <HeaderWorker/>
{/*Table*/}
<div className="container-fluid">
<div style={{width:"90%",margin:"auto"}}>
<table className="table">
{/*Table head*/}
<thead>
  <tr>
    <th>SL.No</th>
    
  
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
    
    <td>{data.department}</td>
    <td>
      {data.class}
    </td>
    <td>{data.room_number}</td>
    <td>{data.complaint}</td>
    <td><img src={`Complaint/${data.image}`} alt="" width="100" height="100" /></td>
    <td>{data.status==="0" ?<button type="button" class="btn btn-info"
    onClick={()=>{accept(data.complaint_id,data._id)}}
    >Finish</button> : <button type="button"  class="btn btn-success">Finished</button> }
        
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
    );
}

export default ViewStudentCom;
