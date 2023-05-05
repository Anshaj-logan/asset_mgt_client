import React from 'react'
import HeaderWorker from '../../components/Header/HeaderWorker'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer/Footer'

const Homeworker = () => {
  return (
    <div>
        <HeaderWorker/>
        <section id="hero" className="d-flex align-items-center">
            <Nav/>
        </section>
        <Footer/>

    </div>
  )
}

export default Homeworker