import axios from 'axios';
import React, { useEffect, useState } from 'react'


const NewAsset = () => {
  const [Asset, setAsset] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:2000/api/allocation/view-assets').then((data) => {
      setAsset(data.data.data);
    })
  }, []);
  return (
    <div className="asset" style={{marginLeft:"100px"}}>
      {/*Table*/}
      <table className="table" >
        {/*Table head*/}
        <thead>
          <tr>
            <th>SL.No</th>
            <th className="th-lg">Asset Name</th>
            <th className="th-lg">purchased Date</th>
            <th className="th-lg">Category Date</th>
            <th className="th-lg">Asset Image</th>
          </tr>
        </thead>
        {/*Table head*/}
        {/*Table body*/}
        <tbody>
          {Asset.map((data,key) => (
            <tr>
              <th scope="row">{key+1}</th>
              <td>{data.assetname}</td>
              <td>{data.purchasedate}</td>
              <td>{data.category}</td>
              <td><img src={`Asset/${data.image}`} height={80} alt="" /></td>              
            </tr>
          ))}


        </tbody>
        {/*Table body*/}
      </table>
      {/*Table*/}
    </div>

  )
}

export default NewAsset