import React from 'react'
import Studentsidebar from '../components/Studentsidebar'
import Coursecard from '../components/Coursecard'
import biology from '../image/biology.png'
import chemistry from '../image/flask.png'
import physics from '../image/atom.png'
import teach from '../image/boiboi.jpg'
import makise from '../image/makise.png'
import teacher from '../image/Teacher.jpg'
function Courses() {
  return (
    <div>
        <Studentsidebar/>
        <h1 className='text-4xl font-serif text-center mt-10'>Courses</h1>
        <div className='ml-100  gap-10 mt-10'>
        <h2 className='text-4xl font-bold text-blue-900'>Your enrolled courses</h2>
        <div className='flex gap-10 mt-10'>


            
        <Coursecard value="Biology" label={teach} teachername="Miss boiboi" contact='9812345668' img={biology}/>
        <Coursecard value="Chemistry " label={makise} teachername="Sita Maam" contact='9812342360' img={chemistry}/>
        <Coursecard value="Physics" label={teacher} teachername="Harka sir" contact='97629842360' img={physics}/>
        </div>

        


        </div>
    </div>
  )
}

export default Courses