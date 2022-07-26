const { Router } = require('express');
const { phoneController } = require('../controllers');
const { paginate } = require('../middleware');

const phonesRouter = Router();

phonesRouter.get('/', paginate.paginate, phoneController.getPhones);

module.exports = phonesRouter;
