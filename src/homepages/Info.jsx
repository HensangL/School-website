import React from 'react'
import pic from '../image/hands.png'
import pic2 from '../image/task.png'
import pic3 from '../image/target.png'

function Info() {
  return (
    <div>
        <div className='flex mt-20'>
            <p className='ml-100'><h1 className='text-5xl border-1-4 border-purple-600 '>OUR VISION</h1>
                <br /><p className='bg-white p-6 rounded-lg shadow-md text-lg text-gray-700 leading-relaxed italic border-l-4 border-purple-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis officia labore est facere temporibus, obcaecati hic soluta pariatur ab! Itaque qui sint cum quasi numquam minima eos atque corporis repudiandae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque quas necessitatibus et labore velit dolore nemo iusto impedit quos eius omnis corrupti quasi voluptates, sit quibusdam magnam ipsam facere?
                </p>
            </p>
            <img src={pic} className="w-100 mr-45 rounded-b-full"/>

        </div>
        <div className='flex mt-20'>
        <img src={pic2} className="w-100 ml-100 rounded-b-full"/>

            <p className='mr-50'><h1 className='text-5xl'>OUR VISION</h1>
                <br />
                <p className='border-r-4 rounded-2xl py-13 text-lg  border-green-400 p-5 italic text-grey-100'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis officia labore est facere temporibus, obcaecati hic soluta pariatur ab! Itaque qui sint cum quasi numquam minima eos atque corporis repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum quo amet, architecto explicabo temporibus, itaque ipsam fugiat possimus eos aliquid nobis? Est doloremque sequi eum eos. Quae, blanditiis dolore!
                </p>
            </p>
            
        </div>
        <div className='flex mt-20'>
            <p className='ml-100'><h1 className='text-5xl'>OUR VISION</h1>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis officia labore est facere temporibus, obcaecati hic soluta pariatur ab! Itaque qui sint cum quasi numquam minima eos atque corporis repudiandae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque quas necessitatibus et labore velit dolore nemo iusto impedit quos eius omnis corrupti quasi voluptates, sit quibusdam magnam ipsam facere?
            </p>
            <img src={pic3} className="w-100 mr-45 rounded-b-full"/>

        </div>
        
    </div>
  )
}

export default Info