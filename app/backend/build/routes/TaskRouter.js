"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const TaskRouter = (0, express_1.Router)();
const tasksController = new controllers_1.default();
TaskRouter.get('/', async (req, res, next) => tasksController.getAllTasks(req, res, next));
TaskRouter.post('/', async (req, res, next) => tasksController.createTask(req, res, next));
exports.default = TaskRouter;
//# sourceMappingURL=TaskRouter.js.map