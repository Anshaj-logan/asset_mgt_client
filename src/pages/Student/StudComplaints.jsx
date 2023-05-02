import React from 'react'
import StudComplaint from '../../components/Student/StudComplaint'
import Header from '../../components/Header/Header'
import HeaderStudent from '../../components/Header/HeaderStudent'

const StudComplaints = () => {
  return (
    <div className='stsgtn' >
        <Header/>
        <section id="hero" className="d-flex align-items-center">
            <Nav/>
        </section>
        <StudComplaint/>
    </div>
  )
}

export default StudComplaints