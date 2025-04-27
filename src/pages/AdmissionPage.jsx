import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

function AdmissionPage() {
  return (
    <div>
    <Sidebar/>
  <div className='ml-65'>
    <h1 className='text-4xl text-blue-700 ml-120'>Admisson Page</h1>
    <div className='flex gap-20 ml-80'>
    <Card value="1256" label="Total student admitted" />
    <Card value="500" label="Total stuednt Passedout" />

    </div>
  </div>
  </div>
  );
}

export default AdmissionPage;
