const route = require('express').Router();

const userController = require('../controllers/controllers.user.js');

route.route('/').get(userController.showUsers).post(userController.createUser);

module.exports = route;