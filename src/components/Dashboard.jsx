import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Patient Information</h3>
          <p className="text-gray-700">Details about recent patients will appear here.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Upcoming Appointments</h3>
          <p className="text-gray-700">Your schedule for the next week.</p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
