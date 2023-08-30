//visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
  //매개변수이름 마음대로
  const model = Sequelize.define('visitor', {
    id: {
      // ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
      type: DataTypes.INTEGER,
      allowNull: false,
      primarykey: true,
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
    tableName: 'visitor', // 실제 db 테이블 명
    freezeTableName: true, //테이블명 고정(모델 이름 테이블로 바꿀때 복수형으로 바뀜)
    timestamps: true,
  });

  return model;
};

module.exports = Visitor;
