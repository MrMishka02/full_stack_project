import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mrmishka:Coding0205@cluster0.fy5yilt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post("/auth/register", (req, res) => {
  
});

app.listen(3001, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Server Ok");
  }
});
