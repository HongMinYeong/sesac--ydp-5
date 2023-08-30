//visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
  //매개변수이름 마음대로

  //Sequelize : models/index.js 에서 sequelize
  //DataTypes : models/index.js 에서 Sequelize
  const model = Sequelize.define(
    'visitor',
    {
      id: {
        // ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // NAME VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // COMMENT MEDIUMTEXT
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', // 실제 db 테이블 명
      freezeTableName: true, //테이블명 고정(모델 이름 테이블로 바꿀때 복수형으로 바뀜)
      timestamps: true, //createAt, updatedAt 컬럼 자동 생성
      // timestamps: false, //컬럼두개 굳이 필요없으면 이거
    }
  );

  return model;
};

module.exports = Visitor;
