const { Router } = require('express');
const { userController } = require('../controllers');
const { validate } = require('../middleware');

const usersRouter = Router();

usersRouter
  .route('/')
  .get(userController.getUserAll)
  .post(validate.validateUserCreated, userController.createUser);

usersRouter
  .route('/:userId')
  .patch(validate.validateUserUpdated, userController.updateUser)
  .delete(userController.deleteUser);

usersRouter.get('/:userId/phones', userController.getUsersPhones);

module.exports = usersRouter;
