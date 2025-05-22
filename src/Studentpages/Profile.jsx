import React, { useState } from 'react';
import Studentsidebar from '../components/Studentsidebar';
import pfp from '../image/makise.png';

function Profile() {
  const [showForm, setShowForm] = useState(false);
  
  // This state holds the values inside the form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  // This state holds the actual displayed profile info
  const [profileData, setProfileData] = useState({
    name: 'Username',
    phone: '9812345678',
    email: 'username@gmail.com',
    address: 'Dhankuta-6',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData(formData); // Update profile info
    setShowForm(false); // Close form
    alert('Profile updated!');
  };

  return (
    <div className="min-h-screen flex">
      <Studentsidebar />

      <div className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-center text-2xl font-serif mb-6">Profile</h1>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 bg-white p-6 rounded-xl shadow-lg">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={pfp}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Profile Info */}
            <div className="w-full max-w-md">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <p className="font-semibold">Name:</p>
                  <p className="font-light">{profileData.name}</p>
                </li>
                <li>
                  <p className="font-semibold">Email:</p>
                  <p className="font-light">{profileData.email}</p>
                </li>
                <li>
                  <p className="font-semibold">Phone no:</p>
                  <p className="font-light">{profileData.phone}</p>
                </li>
                <li>
                  <p className="font-semibold">Address:</p>
                  <p className="font-light">{profileData.address}</p>
                </li>
                <li>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="mt-2 px-4 py-2 border-2 border-blue-800 rounded-lg text-blue-800 hover:scale-105 transition-transform"
                  >
                    {showForm ? 'Cancel' : 'Edit Profile'}
                  </button>
                </li>
              </ul>

              {/* Form Section */}
              {showForm && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4 bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Buttons at Bottom */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 border-2 border-blue-800 rounded-lg text-blue-800 hover:scale-105 transition-transform">
              Logo
            </button>
            <button className="px-4 py-2 border-2 border-blue-800 rounded-lg text-blue-800 hover:scale-105 transition-transform">
              Upload Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
