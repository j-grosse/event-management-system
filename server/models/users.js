const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
    },
    age: {
      type: Number,
      min: 18,
      required: [true, 'Age is required!'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required!'],
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: [true, 'isActive has to be set to true!'],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('User', userSchema);

module.exports = model;
