import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <div className="flex justify-center items-center h-full">
        <div className="w-full bg-white rounded p-4 shadow-lg">
          <form onSubmit={submit}>
            <h1 className="text-2xl font-semibold mb-4">Add User</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="form-input w-full rounded-md shadow-sm"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="form-input w-full rounded-md shadow-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-600">
                Age
              </label>
              <input
                type="text"
                id="age"
                placeholder="Enter Your Age"
                className="form-input w-full rounded-md shadow-sm"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
