import React from 'react'
import Nav from '../../components/Nav'
import HeaderStudent from '../../components/Header/HeaderStudent'
import Footer from '../../components/Footer/Footer'

const HomeStudent = () => {
  return (
    <div>
        <HeaderStudent/>
        <section id="hero" className="d-flex align-items-center">
            <Nav/>
        </section>
        <Footer/>

    </div>
  )
}

export default HomeStudent