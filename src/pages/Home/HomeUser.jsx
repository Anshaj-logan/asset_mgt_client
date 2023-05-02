import React from 'react'
import HeaderUser from '../../components/Header/HeaderUser'
import Nav from '../../components/Nav'

const HomeUser = () => {
  return (
    <div>
        <HeaderUser/>
        <section id="hero" className="d-flex align-items-center">
            <Nav/>
        </section>
    </div>
  )
}

export default HomeUser