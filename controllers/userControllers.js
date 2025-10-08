import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.error.status(500).json({ error: error.Message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) res.status(200).json(user);
  } catch (error) {}
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json({ Message: "user created successfully", user: savedUser });
  } catch (error) {
    res.json({ error: error });
  }
};

export const updateUser = async (req, res) => {
  const users = await User.findByIdAndUpdate(req.params.id);
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const users = await User.findByIdAndDelete(req.params.id);
  res.json(users);
};
