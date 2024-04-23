const express = require('express');
const bookController = require('../controllers/books');

const router = express.Router();


router.get('/', bookController.getBooksList);


router.get('/books/:id', bookController.getBookDetails);

// Ustawienie kontrolera dla żądania POST /books/borrow/:id
router.post('/books/borrow/:id', bookController.postBookBorrow);

// Ustawienie kontrolera dla żądania POST /books/return/:id
router.post('/books/return/:id', bookController.postBookReturn);

// Ustawienie kontrolera dla żądania GET /books/borrow/success
router.get('/books/borrow/success', bookController.getBookBorrowSuccess);

// Ustawienie kontrolera dla żądania GET /books/return/success
router.get('/books/return/success', bookController.getBookReturnSuccess);


module.exports = router;