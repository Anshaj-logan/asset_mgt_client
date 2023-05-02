import React from 'react'

const Registration = () => {
  return (
    <div>
        <div className="container-fluid" id="log">
  <div className="row">
    <img
      src="img/empty-classroom-due-coronavirus-pandemic (1).jpg"
      height="700px"
      width="950px"
    />
    {/* <div className="reg"></div>
    <div className="col-sm-4" /> */}
  </div>
  <div className="row">
    {/* <div className="col-sm-4" /> */}
    <div className="form-group">
      <form>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Department"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Year"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Confirm Password"
          required=""
        />
        <br />
        <p>
          <button type="button" className="btn btn-success">
            SUBMIT
          </button>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Registration