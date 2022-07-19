const { Router } = require('express');

const usersRouter = Router();

//users
usersRouter.post('/');

usersRouter
  .route('/:userId')
  .patch(() => {})
  .delete(() => {});

usersRouter.get('/:userId/phones', (req, res) => {
  res.send('dsfsfdfdfdfdf');
});

module.exports = usersRouter;
