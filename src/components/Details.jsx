import React from 'react';

function Details() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">User Details</h2>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Age</label>
            <input 
              type="number" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your age"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Details;
