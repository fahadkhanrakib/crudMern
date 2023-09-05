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
    <div className="p-5 h-screen bg-gray-100 ">
      <div className="overflow-auto rounded-lg shadow">
        <div className="w-full bg-white rounded p-3">
          <Link to="/create" className="px-2 py-1 bg-yellow-400 rounded shadow">
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
                    <td className="p-3 text-sm text-sm text-gray-700">
                      {user.name}
                    </td>
                    <td className="p-3 text-sm text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="p-3 text-sm text-sm text-gray-700">
                      {user.age}
                    </td>
                    <td className="p-3 text-sm text-sm text-gray-700">
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
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
