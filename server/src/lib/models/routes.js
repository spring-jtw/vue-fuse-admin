const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('routes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "路径"
    },
    redirect: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "重定向"
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "组件路径"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "页面标题"
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "页面图标class"
    },
    active_menu: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "激活的菜单样路径"
    },
    router_key: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "vue-router-tab路由模式;默认为空同等于path;可填fullpath"
    },
    hidden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "是否隐藏,1显示,2隐藏"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'routes',
    timestamps: false,
    raw: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
