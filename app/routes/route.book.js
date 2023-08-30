const route = require('express').Router();
const bookController = require('../controllers/controllers.book');

route.route('/').get(bookController.show_all_books).post(bookController.create_book);   // works on get and post mechanism for books

route.route('/:id').delete(bookController.delete_book).put(bookController.update_book);  //works on delete and update mechanism for books

module.exports = route;
