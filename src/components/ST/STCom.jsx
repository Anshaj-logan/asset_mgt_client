import React from 'react'

const STCom = () => {
  return (
    <div>
         <div>
        
        <div class="container">
  <div class="row mx-0 justify-content-center">
    <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
        <br/><br/><br/><br/><br/><br/>
      <form 
        method="POST"
        class="w-100 rounded p-4 border bg-white"
        action="https://herotofu.com/start"
        enctype="multipart/form-data"
      >
        <p>Complaint!!</p>
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Department"
          />
        
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Class"
          />
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Room Number"
          />
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Staff Name"
          />
        <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" placeholder='Complaint'></textarea>
  </div>
  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>

        <div class="mb-4">
          <button type="submit" class="btn btn-primary px-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default STCom