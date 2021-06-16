"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//esto es par ala conexion
//como esta relacionado tengo que importar el archivo relacionado
//definir el modelo de daos 
var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  prioridad: {
    type: _sequelize["default"].INTEGER
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  fecha_entrega: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
}); //un proyecto tiene muchas tareas


Project.hasMany(_Tasks["default"], {
  foreingKey: 'projectid',
  sourceKey: 'id'
}); //una tarea esta en un proyecto

_Tasks["default"].belongsTo(Project, {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;