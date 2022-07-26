const {
  USER_CREATE_VALIDATION_SCHEMA,
  USER_UPDATE_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateUserCreated = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUserCreate = await USER_CREATE_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validatedUserCreate;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUserUpdated = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUserUpdate = await USER_UPDATE_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validatedUserUpdate;
    next();
  } catch (err) {
    next(err);
  }
};
