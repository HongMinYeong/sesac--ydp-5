//이 모듈의 역할
//경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);

module.exports = router;
