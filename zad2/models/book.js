class Book {
  constructor(id, title, author, year, available = true) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = available;
  }

  static getAll() {
      return books;
  }
}

const books = [new Book(1, 'Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 1997),
new Book(2, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925),
new Book(3, 'To Kill a Mockingbird', 'Harper Lee', 1960),
new Book(4, '1984', 'George Orwell', 1949),
new Book(5, 'The Catcher in the Rye', 'J.D. Salinger', 1951)];

module.exports = Book;