import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations.js";

import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://mrmishka:Coding0205@cluster0.fy5yilt.mongodb.net/myApp?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();
app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(3001, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Server Ok");
  }
});
