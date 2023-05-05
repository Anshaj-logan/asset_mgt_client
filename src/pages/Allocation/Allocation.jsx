import React from 'react'
import Alloc from '../../components/Alloca/Alloc'
import Details from '../../components/Alloca/Details'
import Grouping from '../../components/Alloca/Grouping'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Allocation = () => {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <Alloc/>
        <Footer/>
        <Header/>
        {/* <Grouping/> */}
        {/* <Details/> */}


</div>

  </section>
  )
}

export default Allocation