const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    console.log('🚀 ~ file: books.js:6 ~ createBook ~ newBook:', newBook);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log('🚀 ~ file: books.js:15 ~ getAllBooks ~ books:', books);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getBookById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Book.findById(id)
    const books = await Book.find({ _id: id });
    console.log('🚀 ~ file: books.js:28 ~ getBookById ~ books:', books);
    if (books.length === 0) {
      res.status(404).json({ message: 'Book Not Found' });
    }
    res.json(books[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateBook = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedBook = await Book.findByIdAndUpdate()
    const updatedBook = await Book.findOneAndUpdate({ _id: id }, body, { new: true });
    console.log('🚀 ~ file: books.js:46 ~ updateBook ~ updatedBook:', updatedBook);
    if (!updatedBook) {
      res.status(404).json({ message: 'Book Not Found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedBook = await Book.findByIdAndDelete()
    const deletedBook = await Book.findOneAndDelete({ _id: id });
    console.log('🚀 ~ file: books.js:62 ~ deleteBook ~ deletedBook:', deletedBook);
    if (!deletedBook) {
      res.status(404).json({ message: 'Book Not Found' });
    }
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
