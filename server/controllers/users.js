const User = require('../models/users');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log('🚀 ~ file: users.js:6 ~ createUser ~ newUser:', newUser);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log('🚀 ~ file: users.js:15 ~ getAllusers ~ users:', users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getUserById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await User.findById(id)
    const users = await User.find({ _id: id });
    console.log('🚀 ~ file: users.js:28 ~ getUserById ~ users:', users);
    if (users.length === 0) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(users[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedUser = await User.findByIdAndUpdate()
    const updatedUser = await User.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log(
      '🚀 ~ file: users.js:46 ~ updateUser ~ updatedUser:',
      updatedUser
    );
    if (!updatedUser) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedUser = await User.findByIdAndDelete()
    const deletedUser = await User.findOneAndDelete({ _id: id });
    console.log(
      '🚀 ~ file: users.js:62 ~ deleteUser ~ deletedUser:',
      deletedUser
    );
    if (!deletedUser) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
