"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('postgres', //como se llama la base de datos a conectarme 
'postgres', //el usuario con el cual te conectas
'root', //la contraseña de ese usuario
{
  host: 'localhost',
  //el host
  dialect: 'postgres',
  //a que base de datos nos estamos conectando 
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;