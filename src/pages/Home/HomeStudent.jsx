import React from 'react'
import Nav from '../../components/Nav'
import HeaderStudent from '../../components/Header/HeaderStudent'

const HomeStudent = () => {
  return (
    <div>
        <HeaderStudent/>
        <section id="hero" className="d-flex align-items-center">
            <Nav/>
        </section>

    </div>
  )
}

export default HomeStudent