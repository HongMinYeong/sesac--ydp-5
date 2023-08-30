'use strict';

const Sequelize = require('sequelize');
// config.json 파일을 불러와서 development 환경의 db 설정
// config : db 접근 가능한 설정 값 저장
const config = require(__dirname + '/../config/config.json')['development'];
// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, //mvc
  config.username, //user
  config.password, //1234
  config //{}
);

// db = { sequelize : sequelize}
db.sequelize = sequelize;
// db = { sequelize : sequelize, Sequelize : Sequelize}
db.Sequelize = Sequelize;

// !! models/폴더에 정의되는 model(테이블)은 db 객체에 저장
// models/Visitor.js 파일안에 Visitor 함수 실행
// db = {sequelize, Sequelize, Visitor : 모델(테이블)}
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체  -> 모듈화해서 내보냄 -> 다른곳에서 db 객체 사용 가능
module.exports = db;
