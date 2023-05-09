import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios'

const Alloc = () => {

  const [Other, setOther] = useState([]);
  const [Class, setClass] = useState([]);
  console.log(Other,Class);
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    axios.get('http://localhost:2000/api/allocation/view-allocation-class').then((data) => {
      setClass(data.data.data);
    })
  }, []);
  useEffect(() => {
    axios.get('http://localhost:2000/api/allocation/view-allocation-other').then((data) => {
      setOther(data.data.data);
    })
  }, []);
  return (
    <>
      <section id="menu" className="menu section-bg" style={{height:"100vh"}}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>Ours Assets</p>
          </div>
          <div className="row" style={{ marginLeft: "250px" }} data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">
                  All Allocations
                </li>
                {/* <li data-filter=".filter-class">Classes</li>
                <li data-filter=".filter-other">Other</li> */}
                {/* <li data-filter=".filter-specialty">Labs</li>
          <li data-filter=".filter-offices">Offices</li>
          <li data-filter=".filter-others">Others</li> */}

              </ul>
            </div>
          </div>

          <div className="row menu-container" style={{ marginLeft: "80px" }} data-aos="fade-up" data-aos-delay={200}>

            {Class.map((data) => (
              <div className="col-lg-6 menu-item filter-class">

                <div className="menu-content">
                  <a href="#">Class Name</a><span>{data.Class}</span>
                </div>
                <div className="menu-content">
                  <a href="#">Asset Name</a><span>{data.assetname}</span>
                </div>
                <div className="menu-content">
                  <a href="#">Quantity</a><span>{data.allottedquantity}</span>
                </div>

              </div>
          ))} 




        {Other.map((data) => (
            <div className="col-lg-6 menu-item filter-other">

              <div className="menu-content">
                <a href="#">Other Name</a><span>{data.other}</span>
              </div>
              <div className="menu-content">
                <a href="#">Asset Name</a><span>{data.assetname}</span>
              </div>
              <div className="menu-content">
                <a href="#">Quantity</a><span>{data.allottedquantity}</span>
              </div>

            </div>
           ))}
            {/* <div className="col-lg-6 menu-item filter-specialty">
    
        <div className="menu-content">
          <a href="#">Computer Science</a>
        </div>
        <div className="menu-content">
          <a href="#">Msc Psycology</a>
        </div>
       
      </div>
      <div className="col-lg-6 menu-item filter-offices">
    
        <div className="menu-content">
          <a href="#">Computer Science</a>
        </div>
        <div className="menu-content">
          <a href="#">Msc Psycology</a>
        </div>
       
      </div>
      <div className="col-lg-6 menu-item filter-others">
    
        <div className="menu-content">
          <a href="#">Computer Science</a>
        </div>
        <div className="menu-content">
          <a href="#">Msc Psycology</a>
        </div>
       
      </div> */}





























          </div>
        </div>
      </section>

    </>




  )
}

export default Alloc