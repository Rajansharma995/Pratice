const route = require('express').Router();

const categoryController = require('../controllers/controllers.category');


route.route('/').get(categoryController.show_all_category).post(categoryController.create_category);

route.route('/:id').delete(categoryController.delete_category);

module.exports = route;
