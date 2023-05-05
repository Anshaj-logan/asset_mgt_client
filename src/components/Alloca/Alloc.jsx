import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Alloc = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<>
<section id="menu" className="menu section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <p>Ours Assets</p>
    </div>
    <div className="row" style={{marginLeft:"10px"}} data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="menu-flters">
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-starters">Classes</li>
          <li data-filter=".filter-salads">Departments</li>
          <li data-filter=".filter-specialty">Labs</li>
          <li data-filter=".filter-offices">Offices</li>
          <li data-filter=".filter-others">Others</li>

        </ul>
      </div>
    </div>

    <div className="row menu-container" style={{marginLeft:"10px"}} data-aos="fade-up" data-aos-delay={200}>
      <div className="col-lg-6 menu-item filter-starters">
    
        <div className="menu-content">
          <a href="#">Computer Science</a>
        </div>
       
      </div>

      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Msc Psycology</a>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Physics</a>
        </div>
     
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        
        <div className="menu-content">
          <a href="#">English</a>
        </div>
        
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Economics</a>
        </div>
       
      </div>

      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Psycology</a>
        </div>   
      </div>

      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Finance</a>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="#">Bcom CA</a>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Geology</a><span>106</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
          <a href="#">Geology</a>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
          <a href="#">Dept Geology</a>
          <span>106</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Common ICT lab</a><span>111</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Physics Lab</a><span>201</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept CS</a><span>206</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Commerce and Management</a><span>210</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept of physical education</a><span>216</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Economics</a><span>306</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Psycology Lab</a><span>309</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Psycology</a><span>310</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept English</a><span>313</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Principle Room</a><span>401</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Store Room</a><span>402</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Rest Room</a><span>403</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Stock Room</a><span>404</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Office</a><span>405</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">IQAC Room</a><span>406</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Girls Toilet</a><span>407</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Guest Room</a><span>501</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">University Exam Cell</a><span>502</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Physics</a><span>504</span>
        </div>
      </div>


      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Boys Toilet</a><span>507</span>
        </div>
      </div>

      




    </div>
  </div>
</section>

</>


  

  )
}

export default Alloc