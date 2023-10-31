import { body } from "express-validator";

export const loginValidation = [
  body("email", "Incorect email address!").isEmail(),
  body("password", "Password must have min 5 letters!").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", "Incorect email address!").isEmail(),
  body("password", "Password must have min 5 letters!").isLength({ min: 5 }),
  body("fullName", "Input the name!").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect url!").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter article title").isLength({ min: 3 }).isString(),
  body("text", "Enter article text").isLength({ min: 10 }).isString(),
  body("tags", "Incorrect tag format (specify an array)").optional().isArray,
  body("imageUrl", "Incorrect image url").optional().isString(),
];
