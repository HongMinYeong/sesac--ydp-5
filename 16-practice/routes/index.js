const express = require('express');
const controller = require('../controller/CUser');
const router = express.Router();

router.get('/', controller.main);

router.get('/user/signup', controller.signup);
router.get('/user/signin', controller.signin);

router.post('/user/signup', controller.post_signup);
router.post('/user/signin', controller.post_signin);
router.post('/user/profile', controller.post_profile);
router.post('/user/profile/delete', controller.delete_profile);
router.post('/user/profile/edit', controller.edit_profile);

module.exports = router;
