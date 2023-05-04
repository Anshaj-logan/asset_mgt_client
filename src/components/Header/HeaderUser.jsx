import React from 'react'
import { Link } from 'react-router-dom'

const HeaderUser = () => {
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
         <a className="nav-link scrollto" href="" >
         <Link to={'/login'}>Login </Link>
            </a>
          </li>
          {/* <li>
            
                <a class="nav-link scrollto active" href="">
                <Link to={'/registration'}>Registration</Link></a></li> */}
                <li class="dropdown"><a href="#"><span>Registration</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span><Link to={'/staff-reg'}>Staff Registration</Link></span> <i class="bi bi-chevron-right"></i></a>
                {/* <ul>
                  <li><a href="#">
                  <Link to={'/complaint'}>Staff Complaint </Link></a></li>
                  <li><a href="#">view Student Complaint</a>
                  </li>
                </ul> */}
              </li>
              
              <li class="dropdown"><a href="#"><span><Link to={'/registration'}>Student Registration</Link></span> <i class="bi bi-chevron-right"></i></a>
                
              </li>
              <li class="dropdown"><a href="#"><span><Link to={'/worker-reg'}>Workers Registration</Link></span> <i class="bi bi-chevron-right"></i></a>
                
                </li>
            </ul>
          </li>
  
        </ul>
      </nav>
    
    </div>
  </header>
  )
}

export default HeaderUser