import { body } from "express-validator";

export const registerValidation = [
  body("email", "Incorect email address!").isEmail(),
  body("password", "Password must have min 5 letters!").isLength({ min: 5 }),
  body("fullName", "Input the name!").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect url!").optional().isURL(),
];
