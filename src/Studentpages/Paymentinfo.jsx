import React, { useState } from 'react';
import Studentsidebar from '../components/Studentsidebar';

function PaymentInfo() {
  // State for fees data
  const [fees, setFees] = useState([
    { id: 1, type: 'Tuition Fee', dueDate: '15 Oct 2023', amount: 800.00, status: 'paid' },
    { id: 2, type: 'Library Fine', dueDate: '30 Sep 2023', amount: 50.00, status: 'overdue' }
  ]);

  // State for new fee form
  const [showForm, setShowForm] = useState(false);
  const [newFee, setNewFee] = useState({
    type: '',
    dueDate: '',
    amount: '',
    status: 'unpaid'
  });

  // Calculate summary values
  const totalDue = fees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalPaid = fees
    .filter(fee => fee.status === 'paid')
    .reduce((sum, fee) => sum + fee.amount, 0);
  const balance = totalDue - totalPaid;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFee(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = fees.length > 0 ? Math.max(...fees.map(fee => fee.id)) + 1 : 1;
    setFees([...fees, { ...newFee, id: newId, amount: parseFloat(newFee.amount) }]);
    setNewFee({ type: '', dueDate: '', amount: '', status: 'unpaid' });
    setShowForm(false);
  };

  return (
    <div className="flex">
      <Studentsidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h1>
        
        {/* Add New Fee Button */}
        <button 
          onClick={() => setShowForm(true)}
          className="mb-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          + Add New Fee
        </button>

        {/* Payment Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="font-bold text-lg mb-4">Payment Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg">
              <p className="text-gray-600">Total Due</p>
              <p className="text-2xl font-bold">${totalDue.toFixed(2)}</p>
            </div>
            <div className="border p-4 rounded-lg">
              <p className="text-gray-600">Paid</p>
              <p className="text-2xl font-bold text-green-600">${totalPaid.toFixed(2)}</p>
            </div>
            <div className="border p-4 rounded-lg">
              <p className="text-gray-600">Balance</p>
              <p className="text-2xl font-bold text-red-600">${balance.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Add Fee Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Add New Fee</h3>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fee Type</label>
                    <input
                      type="text"
                      name="type"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={newFee.type}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={newFee.dueDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                    <input
                      type="number"
                      name="amount"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={newFee.amount}
                      onChange={handleInputChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={newFee.status}
                      onChange={handleInputChange}
                    >
                      <option value="unpaid">Unpaid</option>
                      <option value="paid">Paid</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Add Fee
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Fees Table */}
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Fee Type</th>
              <th className="py-3 px-4 text-left">Due Date</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{fee.type}</td>
                <td className={`py-3 px-4 ${fee.status === 'overdue' ? 'text-red-600' : ''}`}>
                  {fee.dueDate}
                </td>
                <td className="py-3 px-4">${fee.amount.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    fee.status === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : fee.status === 'overdue' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentInfo;