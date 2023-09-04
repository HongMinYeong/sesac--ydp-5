'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO: 모델 모듈 불러오기
const User = require('./User')(sequelize, Sequelize);

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.User = User;

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
