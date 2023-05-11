import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("staff_id")
    navigate('/')

  }
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
          <li><a class="nav-link scrollto active" href="">
            <Link to={'/alloc'}>Allocation</Link></a></li>

            <li><a class="nav-link scrollto" href="#newasset">
            <Link to={'/newasset'}>New Assets</Link> </a></li>
            <li class="dropdown"><a href="#"><span>Complaint</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
             
             
              <li class="dropdown"><a href="#"><Link to={'/worker-add-complaint'}>Add Complaint</Link> <i class="bi bi-chevron-right"></i></a></li>
              <li class="dropdown"><a href="#"><Link to={'/viewstdcom'}>view Student Complaint</Link> <i class="bi bi-chevron-right"></i></a></li>
            </ul>
          </li>

          <li><a class="nav-link scrollto" href="">
          <Link to={'/studstatus'}>Status</Link></a></li>

          <li><a class="nav-link scrollto" href="">
          <Link to={'/gallery'}>Gallery</Link> </a></li>


        
          <li>
            <a className="nav-link scrollto"  onClick={logout} >
              Logout
            </a>
          </li>
{/*     
           */}
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

export default Header