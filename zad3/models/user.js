class User {
  constructor(id, login, borrowedBooks = []) {
    this.id = id;
    this.login = login;
    this.borrowedBooks = borrowedBooks;
  }

  static getAll() {
    return users;
  }

  static getById(id) {
    const userId = typeof id === 'string' ? parseInt(id, 10) : id;
    return users.find((user) => user.id === userId);
  }

  borrowBook(book) {
    this.borrowedBooks.push(book);
  }

  returnBook(bookId) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.id !== bookId
    );
  }

  findBorrowedBookById(bookId) {
    return this.borrowedBooks.some((book) => book.id === bookId);
  }
}

const users = [
  new User(1, "john_doe"),
  new User(2, "jane_smith"),
  new User(3, "bob_jones"),
  new User(4, "alice_williams"),
  new User(5, "tom_davis"),
];

module.exports = User;
