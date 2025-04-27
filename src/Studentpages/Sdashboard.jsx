import React from 'react'
import Studentsidebar from '../components/Studentsidebar'
import logo from '../image/task.png'
import Financecard from '../components/Financecard'
import target from '../image/target.png'
import hand from '../image/hands.png'
import task from '../image/task.png'
function Sdashboard() {
  return (
    <div>
        <Studentsidebar/>
        <div className='ml-100 mt-8  w-100 flex'>
            <input type='text' placeholder='Search' className='w-500 '/>
            <div className='flex ml-190'>
            <img src={target} className='w-[58px] h-[55px]' />
            <div className='flex-col'>
            <p className='text-shadow-2xs font-semibold font-serif'>Johndoe</p>
            <p className='font-light font-serif'>!st year</p>
            </div>
            </div>
        </div>
        <div className='flex ml-100 bg-[#925FE2] mt-[128px] rounded-[24px] w-[1095px] h-[256px]'>
            <div>
            <p className='text-white w-[153px]  ml-10 py-4'>April 27, 2025</p>
            <section className='mt-29 px-7'>
            <p className='text-3xl text-white'>Welcome back ,John</p>
            <p className='text-white'>Always stay updated in your student portal</p>
            </section>
            </div>
            <div>
                <img src={logo} className='w-[274px] h-[254px] ml-[450px]'/>

            </div>
            
        </div>
        <div className='flex'>
        <div className=' ml-100 flex flex-col gap-6 mt-5 ' >
                <h1 className='text-3xl'>Finances</h1>
                <div className='flex'>
                <Financecard value="50000" label="Total payment"/>
                <section className='border-2 rounded-3xl border-[#925FE2]'><Financecard value="30000" label="Total Paid" /></section>
                
                <Financecard value="20000" label="Total Remaining"/>
                </div>

            </div>
            <div className='mt-5'>
            <h1 className='text-2xl font-serif mt-'>Course instructors</h1>
            <div className='flex gap-5'>
            <img src={target} className='w-[89px] border-2 border-[#925FE2] h-[93px] mt-5' />
            <img src={hand} className='w-[89px] border-2 border-[#925FE2] h-[93px] mt-5' />
            <img src={task} className='w-[89px] border-2 border-[#925FE2] h-[93px] mt-5' />
            </div>
            </div>
            </div>
    </div>
  )
}

export default Sdashboard