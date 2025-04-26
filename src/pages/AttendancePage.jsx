import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

function AttendancePage() {
  return (
    <>
      <Sidebar />
      <div className="ml-64 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Attendance Dashboard</h1>
        <p className="text-gray-500 text-lg mb-8">Manage and view today's attendance summary</p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Total Students Present</h2>
            <Card value="1256" label="Students" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendancePage;
