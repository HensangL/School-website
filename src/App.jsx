import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route,Routes,useLocation } from 'react-router'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './login/Admin'
import Student from './login/Student'
import Teacher from './login/Teacher'
import Admindash from './dashboard/Admindash'
import DashboardOnlyLayout from './layouts/DashboardOnlyLayout';
import Navbar from './components/Navbar';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import AttendancePage from './pages/AttendancePage';
import GradesPage from './pages/GradesPage';
import AdmissionPage from './pages/AdmissionPage';
import Studentdashboard from './dashboard/Studentdashboard'
import Sdashboard from './Studentpages/Sdashboard'
import Paymentinfo from './Studentpages/Paymentinfo'
import Attencance from './Studentpages/Attendance'
import Principal from './aboutpage/Principal'
import Chairman from './aboutpage/Chairman'
import Team from './aboutpage/Team'
import Courses from './Studentpages/Courses'
import Assignments from './pages/Assignments'
import Teacherdash from './dashboard/Teacherdash'
import Maindashboard from './teacherdashboard/Maindashboard'
import Classmycourse from './teacherdashboard/Classmycourse'

function App() {
  const location = useLocation();
  const showNavbar = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/contact';


  return (
    <>
    {showNavbar && <Navbar />}
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/chairman' element={<Chairman/>}/>
        <Route path='/team' element={<Team/>}/>


        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/admindashboard' element={<Admindash/>}/>
        <Route path ='/studentdashboard' element={<Studentdashboard/>}/>
        <Route path='/admindash-only' element={<DashboardOnlyLayout><Admindash /></DashboardOnlyLayout>} />
        <Route path='/studentpage' element={<StudentPage />} />
        <Route path='/teacherpage' element={<TeacherPage />} />
        <Route path='/attendance' element={<AttendancePage />} />
        <Route path='/grades' element={<GradesPage />} />
        <Route path='/admission' element={<AdmissionPage />} />
        <Route path='/sdashboard' element={<Sdashboard/>}/>
        <Route path='/payment' element={<Paymentinfo/>}/>
        <Route path='/attendancestudent' element={<Attencance/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/assignments' element={<Assignments/>}/>
        <Route path='/teacherdash' element={<Teacherdash/>}/>
        <Route path='/maindashboard' element={<Maindashboard/>}/>
                <Route path='/classmycourse' element={<Classmycourse/>}/>





        



      </Routes>

    </div>
      
    </>
  )
}

export default App
