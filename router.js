const { Router } = require('express');

const router = Router();
//phones
router.get('/phones');

//users
router.post('/users');
router.patch('/users/:userId');
router.delete('/users/:userId');
router.get('/users/:userId/phones');

module.exports = router;
