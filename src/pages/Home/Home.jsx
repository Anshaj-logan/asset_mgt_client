import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav'

import Footer from '../../components/Footer/Footer'
// import Welcome from '../../components/Welcome'

const Home = () => {
  return (
  
    <div>
     {/* <Topbar/> */}

     <Header/>
    <section id="hero" className="d-flex align-items-center">
<Nav/>
</section>
<Footer/>



    

    {/* <Section/> */}
    {/* <Welcome/> */}
    {/* <Menusection/> */}
    </div>
  
   
  )
}

export default Home