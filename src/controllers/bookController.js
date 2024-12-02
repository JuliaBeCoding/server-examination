const Book = require('../models/bookSchema')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const getBook = async (req, res) => {
  const { book_id } = req.params
  
  try {
    const book = await Book.findById(book_id)
    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }
    res.status(200).json(book)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const createBook = async (req, res) => {
  const { title, author, read } = req.body

  try {
    const newBook = new Book({ title, author, read })
    const savedBook = await newBook.save()
    res.status(201).json(savedBook)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const updateBook = async (req, res) => {
  const { book_id } = req.params
  const { title, author, read } = req.body

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      book_id,
      { title, author, read },
      { new: true }
    )
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' })
    }
    res.status(200).json(updatedBook)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const deleteBook = async (req, res) => {
  const { book_id } = req.params

  try {
    const deletedBook = await Book.findByIdAndDelete(book_id)
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' })
    }
    res.status(200).json({ message: 'Book deleted successfully' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook }