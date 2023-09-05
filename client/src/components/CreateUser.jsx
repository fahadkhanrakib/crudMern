import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
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
    <div>
      <div className="flex h-full bg-red-500 justify-center items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={submit}>
            <h1>Add User</h1>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter Your Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Success</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
