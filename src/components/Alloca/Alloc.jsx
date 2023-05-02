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
      <h2></h2>
      <p>Ours</p>
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
        {/* <img
          src="assets/img/menu/lobster-bisque.jpg"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">Computer Science</a>
          {/* <span>$5.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Lorem, deren, trataro, filede, nerada
        </div> */}
      </div>

      <div className="col-lg-6 menu-item filter-starters">
        {/* <img
          src="img\empty-classroom-due-coronavirus-pandemic (1)"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">Msc Psycology</a>
          {/* <span>$6.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Lorem, deren, trataro, filede, nerada
        </div> */}
      </div>




      <div className="col-lg-6 menu-item filter-starters">
        {/* <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" /> */}
        <div className="menu-content">
          <a href="#">Physics</a>
          {/* <span>$8.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Lorem, deren, trataro, filede, nerada
        </div> */}
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        {/* <img
          src="assets/img/menu/tuscan-grilled.jpg"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">English</a>
          {/* <span>$9.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Grilled chicken with provolone, artichoke hearts, and roasted red
          pesto
        </div> */}
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        {/* <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" /> */}
        <div className="menu-content">
          <a href="#">Economics</a>
          {/* <span>$4.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Lorem, deren, trataro, filede, nerada
        </div> */}
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        {/* <img
          src="assets/img/menu/greek-salad.jpg"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">Psycology</a>
          {/* <span>$9.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Fresh spinach, crisp romaine, tomatoes, and Greek olives
        </div> */}
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        {/* <img
          src="assets/img/menu/spinach-salad.jpg"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">Finance</a>
          {/* <span>$9.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Fresh spinach with mushrooms, hard boiled egg, and warm bacon
          vinaigrette
        </div> */}
      </div>


      <div className="col-lg-6 menu-item filter-starters">
        {/* <img
          src="assets/img/menu/lobster-roll.jpg"
          className="menu-img"
          alt=""
        /> */}
        <div className="menu-content">
          <a href="#">Bcom CA</a>
          {/* <span>$12.95</span> */}
        </div>
        {/* <div className="menu-ingredients">
          Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
        </div> */}
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
      <a href="#">Dept Geology</a><span>106</span>
        </div>
      </div>

      <div className="col-lg-6 menu-item filter-specialty">
      <div className="menu-content">
          <a href="#">Geology</a>
          {/* <span>$12.95</span> */}
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