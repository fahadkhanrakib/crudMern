import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div>
      <div className="flex h-full bg-red-100 justify-center items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={update}>
            <h1>Update User</h1>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter Your Age"
                className="form-control"
                value={age}
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

export default UpdateUser;
