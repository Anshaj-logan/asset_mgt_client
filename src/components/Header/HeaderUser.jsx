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
          <li>
            
                <a class="nav-link scrollto active" href="">
                <Link to={'/registration'}>Registration</Link></a></li>
  
        </ul>
      </nav>
    
    </div>
  </header>
  )
}

export default HeaderUser