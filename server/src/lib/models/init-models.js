var DataTypes = require("sequelize").DataTypes;
var _routes = require("./routes");
var _users = require("./users");

function initModels(sequelize) {
  var routes = _routes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    routes,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
