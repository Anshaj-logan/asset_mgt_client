import React from 'react'

const Suggestion = () => {
  return (
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
        <p>Suggestion!!</p>
        
          <input name="name" type="text" class="form-control" placeholder="Department"/>

          <input name="name" type="text" class="form-control" placeholder="Class" />
          <input name="name" type="text" class="form-control" placeholder="Roomnumber"/>


          <input name="name" type="text" class="form-control" placeholder="Student Name"/>
        
          {/* <input name="name" type="text" class="form-control" placeholder="Complaint"/> */}
          <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" placeholder='Suggetion'></textarea>
    {/* <label class="form-label" for="form4Example3">Message</label> */}
  </div>

        <div class="mb-4">
          <button type="submit" class="btn btn-primary px-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Suggestion