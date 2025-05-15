import React, { useState } from 'react'
import Teachersidebar from '../components/Teachersidebar'

function Teacherattendance() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)
  const [attendance, setAttendance] = useState({})

  const classList = ['CLASS 7', 'CLASS 8', 'CLASS 9', 'CLASS 10']

  const dummyStudents = {
    'CLASS 7': ['Ram', 'Sita', 'Hari'],
    'CLASS 8': ['Gita', 'Ramesh', 'Sunita'],
    'CLASS 9': ['Kiran', 'Anita', 'Binod'],
    'CLASS 10': ['Bina', 'Deepak', 'Sabina'],
  }

  const handleStatusChange = (student, status) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: status
    }))
  }

  const presentStudents = Object.entries(attendance)
    .filter(([_, status]) => status === 'Present')
    .map(([student]) => student)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Teachersidebar />

      <div className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-xl border">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
              Mark Student Attendance
            </h1>

            {/* Class Selection Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {selectedClass ? selectedClass : 'Select Class'}
              </button>

              {/* Dropdown with fade and scale animation */}
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-white border border-gray-300 rounded-lg shadow-lg z-20
                             origin-top-right
                             animate-fadeInScale"
                  style={{ animationDuration: '200ms', animationTimingFunction: 'ease-out' }}
                >
                  <ul className="divide-y divide-gray-200">
                    {classList.map((cls, i) => (
                      <li
                        key={i}
                        className="p-3 hover:bg-indigo-50 cursor-pointer font-medium text-gray-700 transition-colors duration-200"
                        onClick={() => {
                          setSelectedClass(cls)
                          setDropdownOpen(false)
                          setAttendance({})
                        }}
                      >
                        {cls}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Attendance Table */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              {selectedClass ? `Attendance for ${selectedClass}` : `Please select a class to view students.`}
            </h2>

            <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-indigo-100 text-indigo-900 font-semibold">
                <tr>
                  <th className="p-4 border border-indigo-200">#</th>
                  <th className="p-4 border border-indigo-200">Student</th>
                  <th className="p-4 border border-indigo-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedClass ? (
                  dummyStudents[selectedClass].map((student, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-indigo-50 transition-colors duration-300 animate-fadeInRow"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <td className="p-4 border border-indigo-200 text-center font-medium">{idx + 1}</td>
                      <td className="p-4 border border-indigo-200">{student}</td>
                      <td className="p-4 border border-indigo-200">
                        <div className="flex gap-6 flex-wrap">
                          {['Present', 'Absent', 'Late', 'Excused'].map(status => (
                            <label key={status} className="flex items-center gap-2 text-sm font-medium text-indigo-800">
                              <input
                                type="radio"
                                name={`status-${student}`}
                                value={status}
                                checked={attendance[student] === status}
                                onChange={() => handleStatusChange(student, status)}
                                className="accent-indigo-600"
                              />
                              {status}
                            </label>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-6 text-center text-gray-400 italic">
                      No class selected.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Submit Button */}
            {selectedClass && (
              <div className="text-center mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300">
                  Submit Attendance
                </button>
              </div>
            )}
          </div>

          {/* Present Students Section Below Table */}
          <div
            className="mt-12 bg-green-50 border border-green-300 rounded-lg p-6 shadow-inner max-w-3xl mx-auto
                       animate-fadeInUp"
            style={{ animationDuration: '500ms' }}
          >
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center tracking-wide">
              Present Students
            </h3>
            {selectedClass ? (
              presentStudents.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4">
                  {presentStudents.map((student, idx) => (
                    <div
                      key={idx}
                      className="bg-green-200 text-green-900 px-4 py-2 rounded-full font-semibold
                                 shadow-md hover:bg-green-300 transition-colors duration-300 cursor-default"
                    >
                      {student}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-green-600 italic font-semibold">
                  No students marked present yet.
                </p>
              )
            ) : (
              <p className="text-center text-green-600 italic font-semibold">
                Select a class to view attendance.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInScale {
          animation-name: fadeInScale;
          animation-fill-mode: forwards;
        }

        @keyframes fadeInRow {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInRow {
          animation-name: fadeInRow;
          animation-fill-mode: forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}

export default Teacherattendance
