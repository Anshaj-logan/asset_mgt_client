import React from 'react'
import Suggestion from '../../components/Student/Suggestion'
import Footer from '../../components/Footer/Footer'
import HeaderStudent from '../../components/Header/HeaderStudent'

const Suggetion = () => {
  return (
    <div className='stsgtn'>
      <HeaderStudent/>
       <Suggestion/>
       <Footer/>
    </div>
  )
}

export default Suggetion