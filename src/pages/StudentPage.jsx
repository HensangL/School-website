import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

function StudentPage() {
  return (
    <>
    <div className='student-admin'>
      <Sidebar/>
      <div className="ml-64 mt-6">
  <p className="text-5xl font-extrabold text-blue-600 drop-shadow-md ml-120">Dashboard</p>
  <p className="text-lg text-gray-500 italic tracking-wide ml-130">School Management</p>
</div>
      <div className='ml-80 flex gap-10'>
      <Card value="1256" label="Students" />
      <Card value="50" label="Teachers" />
      <Card value="20" label="Staff" />
      <Card value="20" label="Total classes" />


</div>
<div>
<p className="text-5xl font-bold text-blue-600 drop-shadow-md ml-170 mt-13">Upcoming Events</p>

</div>
<div className="mt-10 p-6 bg-white rounded-lg shadow ml-65">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">📅 Upcoming Events</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full text-left border border-gray-200">
      <thead>
        <tr className="bg-blue-100 text-blue-800 font-semibold">
          <th className="px-6 py-3 border-b">Event</th>
          <th className="px-6 py-3 border-b">Date</th>
          <th className="px-6 py-3 border-b">Time</th>
          <th className="px-6 py-3 border-b">Venue</th>
          <th className="px-6 py-3 border-b">Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-3 border-b">Science Fair</td>
          <td className="px-6 py-3 border-b">2025-05-05</td>
          <td className="px-6 py-3 border-b">10:00 AM</td>
          <td className="px-6 py-3 border-b">Auditorium</td>
          <td className="px-6 py-3 border-b">Open to all</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-3 border-b">Parent-Teacher Meeting</td>
          <td className="px-6 py-3 border-b">2025-05-10</td>
          <td className="px-6 py-3 border-b">1:00 PM</td>
          <td className="px-6 py-3 border-b">Main Hall</td>
          <td className="px-6 py-3 border-b">Grade 6 to 10</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-3 border-b">Sports Day</td>
          <td className="px-6 py-3 border-b">2025-05-20</td>
          <td className="px-6 py-3 border-b">9:00 AM</td>
          <td className="px-6 py-3 border-b">Playground</td>
          <td className="px-6 py-3 border-b">All students</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
    </>
  );
}

export default StudentPage;
