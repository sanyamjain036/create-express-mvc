import { User } from "../models/userModel.js";

export const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getAllUsers = async (query) => {
  const allUsers = await User.find(query);
  return allUsers;
};