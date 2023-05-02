import React from 'react'

const Grouping = () => {
  return (
    <>
    <div className="row" data-aos="fade-up" data-aos-delay={100}>   
<div className="col-lg-12 d-flex justify-content-center">
  <ul id="menu-flters">
    <li data-filter="*" className="filter-active">
      All
    </li>
    <li data-filter=".filter-starters">Classses</li>
    <li data-filter=".filter-salads">Departments</li>
    <li data-filter=".filter-specialty">Lab</li>
    <li data-filter=".filter-specialty">Offices</li>

    <li data-filter=".filter-specialty">Others</li>

  </ul>
</div>
</div>
</>
  
  )
}

export default Grouping