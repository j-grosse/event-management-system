const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, 'Book Title is Required!'] },
    author: { type: String, required: [true, 'Book Author is Required!'] },
    year: { type: Number, required: [true, 'Book Year is Required!'] },
  },
  {
    timestamps: true,
  },
);
const model = mongoose.model('Book', bookSchema);
module.exports = model;
