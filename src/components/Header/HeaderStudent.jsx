import React from 'react'
import { Link } from 'react-router-dom'

const HeaderStudent = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
      <h1 className="logo me-auto me-lg-0">
        <a href="index.html"></a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {/* <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li> */}

          <li>
            <a className="nav-link scrollto" href="#about" >
             <Link to={'/about'}>Home</Link> 
            </a>
          </li>
          {/* <li><a class="nav-link scrollto active" href="">
            <Link to={'/allocation'}>Allocation</Link></a></li> */}


          {/* <li><a class="nav-link scrollto" href="#newasset">
            <Link to={'/newasset'}>New Assets</Link> </a></li> */}

          <li><a class="nav-link scrollto" href="#status">
          <Link to={'/status'}>Status</Link></a></li>

          {/* <li><a class="nav-link scrollto" href="">
          <Link to={'/gallery'}>Gallery</Link> </a></li> */}


          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Complaint</span> <i class="bi bi-chevron-right"></i></a>
                {/* <ul>
                  <li><a href="#">
                  <Link to={'/complaint'}>Staff Complaint </Link></a></li>
                  <li><a href="#">view Student Complaint</a>
                  </li>
                </ul> */}
              </li>
              
              <li class="dropdown"><a href="#"><span>Suggetion</span> <i class="bi bi-chevron-right"></i></a>
                
              </li>
            </ul>
          </li>
{/*     
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      {/* <a
        href="#book-a-table"
        className="book-a-table-btn scrollto d-none d-lg-flex">
        Book a table
      </a> */}
    </div>
  </header>
  

  )
}

export default HeaderStudent