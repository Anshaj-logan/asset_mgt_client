import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from '../../pages/About/About'
import Gallery from '../../pages/Gallery/Gallery'
import Home from '../../pages/Home/Home'
import HomeUser from '../../pages/Home/HomeUser'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'

import HomeStudent from '../../pages/Home/HomeStudent'
import Homeworker from '../../pages/Home/Homeworker'
import StudComplaint from '../Student/StudComplaint'
import Suggetion from '../../pages/Student/Suggetion'
import StCom from '../../pages/STAFF/StCom'
import StSuggetion from '../../pages/STAFF/StSuggetion'
import Footer from '../Footer/Footer'
import Allocation from '../../pages/Allocation/Allocation'
import Newassets from '../../pages/Asset/Newassets'
import Status from '../Status/Status'
import Studentstatus from '../Status/Studentstatus'
import Viewcom from '../Worker/Viewcom'
import ViewStdCom from '../../pages/STAFF/ViewStdCom'
import StaffRegistration from '../Registration/StaffRegistration'
import WorkerRegistration from '../Registration/WorkerRegistration'


const MainRouter = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeUser/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/status' element={<Status/>}/>
            <Route path='/foot' element={<Footer/>}/>
            <Route path='/user' element={<HomeUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/staff-reg' element={<StaffRegistration/>}/>
            <Route path='/worker-reg' element={<WorkerRegistration/>}/>
            <Route path='/homestaff' element={<Home/>}/>
            <Route path='/alloc' element={<Allocation/>}/>
            <Route path='/newasset' element={<Newassets/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/stcomplaint' element={<StCom/>}/>
            <Route path='/stsuggetion' element={<StSuggetion/>}/>
            <Route path='/viewstdcom' element={<ViewStdCom/>}/>
            
            <Route path='/homestudent' element={<HomeStudent/>}/>
            <Route path='/studcomplaint' element={<StudComplaint/>}/>
            <Route path='/studsuggetion' element={<Suggetion/>}/>
            <Route  path='/studstatus' element={<Studentstatus/>}/>

            <Route path='/homeworker' element={<Homeworker/>}/>
            <Route path='/viewcomplaint' element={<Viewcom/>}/>


        </Routes>
    </div>
  )
}

export default MainRouter