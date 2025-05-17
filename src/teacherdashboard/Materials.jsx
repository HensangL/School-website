import React, { useState } from 'react';
import Teachersidebar from '../components/Teachersidebar';

function Materials() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const materials = [
    { id: 1, title: 'Algebra Notes', course: 'Math', uploadedAt: '2025-05-16', type: 'PDF' },
    { id: 2, title: 'Cell Diagram', course: 'Science', uploadedAt: '2025-05-15', type: 'Image' },
    { id: 3, title: 'Grammar Rules', course: 'English', uploadedAt: '2025-05-14', type: 'DOCX' },
    { id: 4, title: 'Trigonometry Guide', course: 'Math', uploadedAt: '2025-05-13', type: 'PDF' },
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue.trim().toLowerCase());
  };

  const filteredMaterials = materials.filter((material) =>
    material.course.toLowerCase().includes(searchTerm)
  );

  const getCourseBg = (course) => {
    switch (course.toLowerCase()) {
      case 'math':
        return 'bg-yellow-100';
      case 'science':
        return 'bg-green-100';
      case 'english':
        return 'bg-blue-100';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Teachersidebar />

      <div className="flex-1 p-4 sm:p-8">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-blue-500 mb-8">
          Materials for the Course
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border px-4 py-2 w-full sm:w-72 rounded shadow focus:outline-blue-400"
            placeholder="Type your course"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg max-w-4xl mx-auto my-8 p-4 bg-white">
          <table className="w-full table-auto text-sm sm:text-base text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800 font-semibold">
                <th className="py-2 px-3 border-b">Title</th>
                <th className="py-2 px-3 border-b">Course</th>
                <th className="py-2 px-3 border-b">Upload Time</th>
                <th className="py-2 px-3 border-b">Type</th>
                <th className="py-2 px-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.length > 0 ? (
                filteredMaterials.map((mat) => (
                  <tr
                    key={mat.id}
                    className={`${getCourseBg(mat.course)} hover:bg-opacity-90 hover:shadow-md transition`}
                  >
                    <td className="py-2 px-3 border-b">{mat.title}</td>
                    <td className="py-2 px-3 border-b">{mat.course}</td>
                    <td className="py-2 px-3 border-b">{mat.uploadedAt}</td>
                    <td className="py-2 px-3 border-b">{mat.type}</td>
                    <td className="py-2 px-3 border-b text-center space-x-2">
                      <button className="text-blue-600 hover:underline">View</button>
                      <button className="text-green-600 hover:underline">Download</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No materials found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Materials;
