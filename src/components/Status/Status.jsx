import React from 'react'

const Status = () => {
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
      <tr>
        <th scope="row">1</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
    </tbody>
   
  </table>
 
</div>
  )
}

export default Status