import React from 'react'

const Viewcom = () => {
  return (
    <div>
        <div className="asset">
  {/*Table*/}
  <table className="table">
    {/*Table head*/}
    <thead>
      <tr>
        <th>SL.No</th>
        <th className="th-lg">User Type</th>
        <th className="th-lg">Name</th>
        <th className="th-lg">Department</th>
        <th className="th-lg">Class</th>
        <th className="th-lg">Room Number</th>
        <th className="th-lg">Complaint</th>

      </tr>
    </thead>
    {/*Table head*/}
    {/*Table body*/}
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor</td>
      </tr>
    </tbody>
    {/*Table body*/}
  </table>
  {/*Table*/}
</div>

    </div>
  )
}

export default Viewcom