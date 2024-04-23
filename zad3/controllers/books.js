const Book = require('../models/book');
const User = require('../models/user');

const getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();
    res.render('books', { title: 'Books', userId, books });
};


const getBookDetails = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getById(bookId);

    
    const user = User.getById(userId);

    console.log(user.id);
    console.log(user.borrowedBooks);
    const didUserBorrowTheBook = user.borrowedBooks.includes(bookId);
    res.render('book-details', { title: 'Book details', userId, book, didUserBorrowTheBook});
};

const postBookBorrow = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getById(bookId);
    if (book.available === false){
        res.redirect('/books');
        return;
    }
    book.borrow(userId);
    const user = User.getById(userId);
    user.borrowBook(book);

    res.redirect('/books/borrow/success');
};


const getBookBorrowSuccess = (req, res) => {
    res.render('success', { message: 'Borrow success', title: 'Borrow success'});
}

const postBookReturn = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getById(bookId);
    book.return();
    const user = User.getById(userId);
    user.returnBook(bookId);

    res.redirect('/books/return/success');
};

const getBookReturnSuccess = (req, res) => {
    res.render('success', { message: 'Return success', title: 'Return success'});
}

module.exports = {
    getBooksList,
    getBookDetails,
    postBookBorrow,
    getBookBorrowSuccess,
    postBookReturn,
    getBookReturnSuccess

};