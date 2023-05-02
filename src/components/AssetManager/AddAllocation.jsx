import React from 'react'

const AddAllocation = () => {
  return (

    <div>
        
    <div class="container">
<div class="row mx-0 justify-content-center">
<div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
    <br/><br/><br/><br/><br/><br/>

    <form>
    <div class="row " >
  <div class="col">
  <br/> <br/> <br/> <br/>
    <input type="text" class="form-control" placeholder="Asset Name" aria-label="First name"/>
  </div>

  <div class="col">
  <br/> <br/> <br/> <br/>
    <input type="text" class="form-control" placeholder="Department" aria-label="Last name"/>
  </div>
  </div>

  <div class="row " >
    
  <div class="col">
    <input type="text" class="form-control" placeholder="AllottedQuantity" aria-label="Last name"/>
  </div>

  <div class="col">
    <input type="text" class="form-control" placeholder="TotalQuantity" aria-label="Last name"/>
  </div>
</div>

<div class="row " >
  <div class="col">
    <input type="text" class="form-control" placeholder="Purchased Date" aria-label="Last name"/>
</div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Price" aria-label="Last name"/>
  </div>
</div>
<div class="mb-3">
    <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
</div>
</div>
</div>
</div>


  
    
   
  )
}

export default AddAllocation