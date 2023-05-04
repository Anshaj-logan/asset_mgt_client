import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from '../../pages/About/About'
import Gallery from '../../pages/Gallery/Gallery'
import Home from '../../pages/Home/Home'
import NewAsset from '../../pages/NewAsset/NewAsset'
import Status from '../../pages/Status/Status'
import HomeUser from '../../pages/Home/HomeUser'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Details from '../Alloca/Details'
import Complaint from '../Complaint'
import HomeStudent from '../../pages/Home/HomeStudent'
import Homeworker from '../../pages/Home/Homeworker'
import Category from '../../pages/AssetManager/Category'
import Addallocation from '../../pages/AssetManager/Addallocation'
import StudComplaint from '../Student/StudComplaint'
import Suggetion from '../../pages/Student/Suggetion'
import StCom from '../../pages/STAFF/StCom'
import StSuggetion from '../../pages/STAFF/StSuggetion'
import Alloc from '../Alloca/Alloc'
import StaffRegistration from '../Registration/StaffRegistration'
import WorkerRegistration from '../Registration/WorkerRegistration'


const MainRouter = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeUser/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/newasset' element={<NewAsset/>}/>
            <Route path='/status' element={<Status/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/user' element={<HomeUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/staff-reg' element={<StaffRegistration/>}/>
            <Route path='/worker-reg' element={<WorkerRegistration/>}/>
            <Route path='/homestaff' element={<Home/>}/>
            <Route path='/alloc' element={<Alloc/>}/>

            {/* <Route path='/complaint' element={<Complaint/>}/> */}
            <Route path='/homestudent' element={<HomeStudent/>}/>
            <Route path='/homeworker' element={<Homeworker/>}/>
            {/* <Route path='/category' element={<Category/>}/> */}
            {/* <Route path='/addallocation' element={<Addallocation/>}/> */}
            <Route path='/studcomplaint' element={<StudComplaint/>}/>
            <Route path='/studsuggetion' element={<Suggetion/>}/>
            <Route path='/stcomplaint' element={<StCom/>}/>
            <Route path='/stsuggetion' element={<StSuggetion/>}/>

            {/* <Route path='/addcategory' element={<AddCategory/>}/> */}
        </Routes>
    </div>
  )
}

export default MainRouter