import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HeaderStudent = () => {

  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("student_id")
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
            <a className="nav-link scrollto" href="" >
             <Link to={'/homestudent'}>Home</Link> 
            </a>
          </li>


          <li><a class="nav-link scrollto" href="#status">
          <Link to={'/status'}>Status</Link></a></li>

          
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><Link to={'/studcomplaint'}><span>Complaint</span></Link> <i class="bi bi-chevron-right"></i></a>
                
              </li>
              
              <li class="dropdown"><a href="#"><Link to={'/studsuggetion'}><span>Suggetion</span></Link> <i class="bi bi-chevron-right"></i></a>
                
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto"  onClick={logout} >
              Logout
            </a>
          </li>

        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    
    </div>
  </header>
  

  )
}

export default HeaderStudent