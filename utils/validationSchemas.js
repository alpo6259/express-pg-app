const yup = require('yup');

module.exports.USER_CREATE_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
  email: yup
    .string()
    .email()
    .max(64)
    .required(),
  tel: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380\d{9}$/, 'Number must start with +380')
    .required(),
});

module.exports.USER_UPDATE_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64),

  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(64),

  email: yup
    .string()
    .email()
    .max(64),

  tel: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380\d{9}$/, 'Number must start with +380'),
});
