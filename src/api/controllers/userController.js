import * as UserService from "../services/userService.js";
import asyncErrorHandler from "../helpers/asyncErrorHandler.js";

export const createUser = asyncErrorHandler(async (req, res) => {
  const { name } = req.body;
  //add validations here
  const user = {
    name,
  };
  const newUser = await UserService.createUser(user);
  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: newUser,
  });
});

export const getAllUsers = asyncErrorHandler(async (req, res) => {
  const allUsers = await UserService.getAllUsers({});
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: allUsers,
  });
});
