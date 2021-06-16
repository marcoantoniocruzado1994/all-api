"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.getOneTask = getOneTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.getTasksByProject = getTasksByProject;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//rutas generales
function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, estado, projectid, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, estado = _req$body.estado, projectid = _req$body.projectid;
            _context.prev = 1;
            _context.next = 4;
            return _Tasks["default"].create({
              nombre: nombre,
              estado: estado,
              projectid: projectid
            }, {
              fields: ['nombre', 'estado', 'projectid']
            });

          case 4:
            newTask = _context.sent;

            if (!newTask) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "tarea creada",
              newTask: newTask
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createTask.apply(this, arguments);
}

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
} //ruttas con la nesecidas de un id


function _getTasks() {
  _getTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectid', 'nombre', 'estado'],
              order: [['id', 'DESC']]
            });

          case 2:
            tasks = _context2.sent;
            res.json({
              message: "estos son las tareas",
              tasks: tasks
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTasks.apply(this, arguments);
}

function getOneTask(_x5, _x6) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Tasks["default"].findOne({
              attributes: ['id', 'nombre', 'estado', 'projectid'],
              where: {
                id: id
              }
            });

          case 3:
            task = _context3.sent;
            res.json({
              message: "tarea encontrada",
              task: task
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteTask;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteTask = _context4.sent;
            res.json({
              message: "tarea eliminada",
              deleteTask: deleteTask
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
} //ruta para obtener todas las rutas


function _updateTask() {
  _updateTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, estado, projectid, task, _updateTask2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, estado = _req$body2.estado, projectid = _req$body2.projectid;
            _context5.prev = 2;
            _context5.next = 5;
            return _Tasks["default"].findOne({
              attributes: ['nombre', 'estado', 'projectid', 'id'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context5.sent;
            _context5.next = 8;
            return _Tasks["default"].update({
              nombre: nombre,
              estado: estado,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 8:
            _updateTask2 = _context5.sent;
            return _context5.abrupt("return", res.json({
              message: "tarea actualizada",
              updateTask: _updateTask2
            }));

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _updateTask.apply(this, arguments);
}

function getTasksByProject(_x11, _x12) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.next = 3;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectid', 'estado', 'nombre'],
              where: {
                projectid: projectid
              }
            });

          case 3:
            tasks = _context6.sent;
            res.json({
              tasks: tasks
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTasksByProject.apply(this, arguments);
}