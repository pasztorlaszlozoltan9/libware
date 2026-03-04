import User from './user.js';
import sequelize from '../database/database.js'
import Customer from './customer.js';
import Book from './book.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Customer = Customer;
db.Book = Book;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
