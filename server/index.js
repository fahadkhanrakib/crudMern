import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/User.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.get("/getUser/:id", (req, res) => {
  const _id = req.params.id;

  UserModel.findById({ _id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const _id = req.params.id;

  UserModel.findByIdAndUpdate(
    { _id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const _id = req.params.id;
  
  UserModel.findByIdAndDelete({_id})
  .then((user)=>{res.json(user)})
  .catch((err)=>{res.json(err)})
});

app.listen(3001, () => {
  console.log("server is running");
});
