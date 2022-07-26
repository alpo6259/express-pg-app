const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const newUser = await User.create(body);
    res.status(201).send({ newUser });
  } catch (err) {
    next(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    const updatedUser = await User.update(userId, body);
    console.log('co', updatedUser);
    if (updatedUser) {
      return res.status(200).send(updatedUser);
    }
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.delete(userId);
    if (deletedUser) {
      return res.status(204).end();
    }
    res.status(404).send('User Not Found');
  } catch (err) {
    next(err);
  }
};

module.exports.getUsersPhones = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const getUserPhones = await User.getUsersPhones(userId);
    if (getUserPhones) {
      return res.status(200).send(getUserPhones);
    }
    res.status(404).send('User Phones Not Found');
  } catch (err) {
    next(err);
  }
};

module.exports.getUserAll = async (req, res, next) => {
  try {
    const getUsersAll = await User.getUsers();
    if (getUsersAll) {
      return res.status(200).send(getUsersAll);
    }
    res.status(400).send('bad request');
  } catch (err) {
    next(err);
  }
};
