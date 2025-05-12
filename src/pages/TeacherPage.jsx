import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function TeacherPage() {
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [filter, setFilter] = useState('all'); // NEW: filter state
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    subject: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTeacherId) {
      // Update existing teacher
      setTeachers(teachers.map(teacher =>
        teacher.id === editingTeacherId ? { ...formData, id: editingTeacherId } : teacher
      ));
    } else {
      // Add new teacher
      setTeachers([...teachers, { ...formData, id: Date.now() }]);
    }

    setFormData({ id: Date.now(), name: '', subject: '', email: '', phone: '' });
    setEditingTeacherId(null);
    setShowTeacherForm(false);
  };

  const removeTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  const editTeacher = (teacher) => {
    setFormData(teacher);
    setEditingTeacherId(teacher.id);
    setShowTeacherForm(true);
  };

  // NEW: Filtered teachers list based on selected filter
  const filteredTeachers = teachers.filter((teacher) => {
    if (filter === 'all') return true;
    if (filter === 'teacher') return teacher.subject !== 'Support staff';
    if (filter === 'support') return teacher.subject === 'Support staff';
    return true;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Staff Management</h1>
        <div className='flex gap-4 flex-wrap mb-6'>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded transition ${filter === 'all' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            All Staffs
          </button>
          <button
            onClick={() => setFilter('teacher')}
            className={`px-4 py-2 rounded transition ${filter === 'teacher' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Teacher
          </button>
          <button
            onClick={() => setFilter('support')}
            className={`px-4 py-2 rounded transition ${filter === 'support' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Support staff
          </button>
          <button
            onClick={() => { 
              setShowTeacherForm(true); 
              setEditingTeacherId(null); 
              setFormData({ id: Date.now(), name: '', subject: '', email: '', phone: '' }); 
            }}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add staff
          </button>
        </div>

        {/* Teachers Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full bg-amber-100 border">
            <thead>
              <tr className="bg-gray-400">
                <th className="py-3 px-4 border text-left">Name</th>
                <th className="py-3 px-4 border text-left">Subject</th>
                <th className="py-3 px-4 border text-left">Email</th>
                <th className="py-3 px-4 border text-left">Phone</th>
                <th className="py-3 px-4 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <td className="py-3 px-4 border">{teacher.name}</td>
                    <td className="py-3 px-4 border">{teacher.subject}</td>
                    <td className="py-3 px-4 border">{teacher.email}</td>
                    <td className="py-3 px-4 border">{teacher.phone}</td>
                    <td className="py-3 px-4 border">
                      <button
                        onClick={() => removeTeacher(teacher.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => editTeacher(teacher)}
                        className="px-3 ml-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-4 border text-center text-gray-500">
                    No staff found for this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Teacher Form Popup */}
        {showTeacherForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{editingTeacherId ? 'Update Staff' : 'Add New Staff'}</h2>
                <button
                  onClick={() => { setShowTeacherForm(false); setEditingTeacherId(null); }}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Maths">Maths</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer">Computer</option>
                    <option value="English">English</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Support staff">Support staff</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                    placeholder="example@school.edu"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="+977 98..."
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setShowTeacherForm(false); setEditingTeacherId(null); }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    {editingTeacherId ? 'Update Staff' : 'Save Staff'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default TeacherPage;
