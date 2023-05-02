import React from 'react'

const AddCategory = () => {
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
        <p>Add Category</p>
        <label class="d-block mb-4">
          <span class="d-block mb-2">Category Name</span>
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Joe Bloggs"
          />
        </label>

        {/* <label class="d-block mb-4">
          <span class="d-block mb-2">Email address</span>
          <input
            name="email"
            type="email"
            class="form-control"
            placeholder="joe.bloggs@example.com"
          />
        </label>

        <div class="mb-4">
          <label class="d-block mb-2">Receipt</label>
          <div class="form-control h-auto">
            <input name="receipt" type="file" class="form-control-file" />
          </div>
        </div>

        <label class="d-block mb-4">
          <span class="d-block mb-2">What's wrong?</span>
          <textarea
            name="message"
            class="form-control"
            rows="3"
            placeholder="Please describe your problem"
          ></textarea>
        </label> */}

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

export default AddCategory