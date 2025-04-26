import React from 'react'
import Sidebar from '../components/Sidebar'
import { Route,Routes } from 'react-router'
import Adminstudent from './Adminstudent'

function Admindash() {
  return (
    <div className='admin-dashboard'>
      <Sidebar/>
      <Routes>
        <Route path='/students' element={<Adminstudent/>}/>
      </Routes>
       
      

    </div>
  )
}

export default Admindash
