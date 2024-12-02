const express = require('express')
const router = express.Router()
const { getAllBooks, getBook, createBook, updateBook, deleteBook} = require('../controllers/bookController')

router.get('/', getAllBooks)
router.get('/:book_id', getBook)
router.post('/', createBook)
router.put('/:book_id', updateBook)
router.delete('/:book_id', deleteBook)

module.exports = router