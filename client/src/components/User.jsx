import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-5 h-screen bg-gray-100">
      <div className="overflow-auto rounded-lg shadow">
        <div className="w-full bg-white rounded p-3">
          <Link
            to="/create"
            className="bg-yellow-400 px-4 py-2 rounded shadow-md text-white hover:bg-yellow-500 mb-4"
          >
            Add +
          </Link>
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="p-3 font-semibold tracking-wide text-left">
                  Age
                </th>
                <th className="p-3 font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {user.map((user) => {
                return (
                  <tr key={user._id}>
                    <td className="p-3 text-sm text-gray-700">{user.name}</td>
                    <td className="p-3 text-sm text-gray-700">{user.email}</td>
                    <td className="p-3 text-sm text-gray-700">{user.age}</td>
                    <td className="p-3">
                      <Link
                        to={`/update/${user._id}`}
                        className="bg-green-500 text-white rounded px-2 py-1 mr-2 hover:bg-green-600"
                      >
                        Update
                      </Link>
                      <button
                        className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
