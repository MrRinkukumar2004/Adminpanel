import React from "react";

const Profile = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center animate-fade-in">
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=Rinku"
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-700 mb-1">Rinku Kumar</h2>
        <p className="text-gray-600 mb-6">rinku@example.com</p>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all">
            Edit Profile
          </button>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
