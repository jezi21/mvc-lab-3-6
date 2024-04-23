class User {
  constructor(id, login, borrowedBooks = []) {
      this.id = id;
      this.login = login;
      this.borrowedBooks = borrowedBooks;
  }

  static getAll() {
    return users;
  }
      
}

const users = [
  new User(1, 'john_doe'),
  new User(2, 'jane_smith'),
  new User(3, 'bob_jones'),
  new User(4, 'alice_williams'),
  new User(5, 'tom_davis')
];

module.exports = User;