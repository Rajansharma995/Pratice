const route = require('express').Router();
const blogController = require('../controllers/controllers.book');

route.route('/').get(blogController.show_all_books).post(blogController.create_book);   // works on get and post mechanism for books

route.route('/:id').delete(blogController.delete_book).put(blogController.update_book);  //works on delete and update mechanism for books

module.exports = route;
