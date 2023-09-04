const User = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    { tableName: 'user', freezeTableName: true, timestamps: false }
  );
  return model;
};

module.exports = User;
