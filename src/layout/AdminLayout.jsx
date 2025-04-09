import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6 fixed h-full">
        <div className="text-2xl font-bold text-blue-600">Admin Panel</div>
        <nav className="flex flex-col space-y-4 text-gray-700">
          <Link to="/admin" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/admin/users" className="hover:text-blue-600">
            Users
          </Link>
          <Link to="/admin/settings" className="hover:text-blue-600">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
            <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
