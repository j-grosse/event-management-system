const mongoose = require('mongoose');

// Mongoose is a Node.js Object Data Modeling (ODM) library that provides a higher-level abstraction over the MongoDB driver, allowing you to define schemas and models for your data (which is only one way to structure a mongoDB database).
// A mongoose model (like the one below) is a class and a general JavaScript representation of a MongoDB collection (= table).
// It defines a schema for the documents (= entries) in the collection
// You would then create a new instance of the MODEL CLASS to construct a document for each user you create in your application. And you then use the model methods to perform operations such as creating, querying saving, updating, and deleting user documents (= entries).

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

// create a new model with mongoose.model(), passing in
// the name of the model ('User') and the user schema (userSchema).
const model = mongoose.model('User', userSchema);

module.exports = model;
