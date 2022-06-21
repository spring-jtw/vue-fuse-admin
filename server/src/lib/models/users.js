const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "账号"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "密码"
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "普通用户",
      comment: "昵称"
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "手机号"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    raw: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "username" },
        ]
      },
    ]
  });
};
