import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HeaderWorker = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("worker_id")
    navigate('/')

  }
  return ( 
    <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
      <h1 className="logo me-auto me-lg-0">
        <a href="index.html"></a>
      </h1>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
         
          <li>
            <a className="nav-link scrollto" href="#about" >
             <Link to={'/homeworker'}>Home</Link> 
            </a>
          </li>

          <li class="dropdown"><a href="#"><span>Complaints</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><Link to={'/viewcomplaint'}><span>Student Complaint</span></Link> <i class="bi bi-chevron-right"></i></a>
                
              </li>
              
              <li class="dropdown"><a href="#"><Link to={'/view-staffs-complaint'}><span>Staff Complaint</span></Link> <i class="bi bi-chevron-right"></i></a>
                
              </li>
            </ul>
          </li>
        


          <li class="dropdown"><a href="#"><span>Update Status</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"> <Link to={'/students-accepted-complaint'}>Student Status</Link>  
              </li>
              <li class="dropdown"> <Link to={'/staffss-accepted-complaint'}>Staff Status</Link>  
              </li>
              
             
            </ul>
          </li>


          <li>
            <a className="nav-link scrollto"  onClick={logout} >
              Logout
            </a>
          </li>

          


          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Complaint</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">
                  <Link to={'/complaint'}>Staff Complaint </Link></a></li>
                  <li><a href="#">view Student Complaint</a>
                  </li>
                </ul>
              </li>
              
              <li class="dropdown"><a href="#"><span>Suggetion</span> <i class="bi bi-chevron-right"></i></a>
                
              </li>
            </ul>
          </li> */}
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

export default HeaderWorker