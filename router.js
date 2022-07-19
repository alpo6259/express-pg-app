const { Router } = require('express');
const phonesRouter = require('./routes/phonesRouter');
const usersRouter = require('./routes/usersRouter');

const router = Router();

router.use('/phones', phonesRouter);

router.use('/users', usersRouter);

module.exports = router;
