const express = require('express');
const controller = require('../controller/CUser');
const router = express.Router();

router.get('/', controller.main);
router.get('/user/signup', controller.getsignup);
router.post('/user/signup', controller.postVisitor);

module.exports = router;
