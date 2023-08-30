//이 모듈의 역할
//경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors); //방명록 전체보이기

//방명록 하나 추가
//visitor.ejs에서 버튼 클릭시 createVisitor 함수 실행되고
router.post('/visitor', controller.postVisitor);
//방명록 지우기
router.delete('/visitor', controller.deleteVisitor);
//방명록 조회
router.get('/visitor/:id', controller.getVisitor);
//쿼리스트링버전
// router.get('/visitor', controller.getVisitor);
router.patch('/visitor', controller.updateVisitor);

module.exports = router;
