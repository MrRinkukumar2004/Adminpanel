import React from "react";
import AdminLayout from "../../layout/AdminLayout";

const dummyUsers = [
  { id: 1, name: "Rinku Kumar", email: "rinku@example.com", role: "User" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "User" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Moderator" },
];

const Users = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="text-left py-2 px-4">#</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">Role</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user, i) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
