import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const showNavbar = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/contact';


  return (
    <>
    {showNavbar && <Navbar />}
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/admindashboard' element={<Admindash/>}/>
        <Route path='/admindash-only' element={<DashboardOnlyLayout><Admindash /></DashboardOnlyLayout>} />
        <Route path='/studentpage' element={<StudentPage />} />
        <Route path='/teacherpage' element={<TeacherPage />} />
        <Route path='/attendance' element={<AttendancePage />} />
        <Route path='/grades' element={<GradesPage />} />
        <Route path='/admission' element={<AdmissionPage />} />
      </Routes>

    </div>
      
    </>
  )
}

export default App
