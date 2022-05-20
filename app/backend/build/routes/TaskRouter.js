"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errHandlers_1 = require("../middlewares/errHandlers");
const controllers_1 = require("../controllers");
const TaskRouter = (0, express_1.Router)();
const tasksController = new controllers_1.default();
const errorHandler = new errHandlers_1.default();
TaskRouter.get('/', async (req, res, next) => tasksController.getAllTasks(req, res, next));
TaskRouter.post('/', async (req, res, next) => errorHandler.validateTaskBody(req, res, next), async (req, res, next) => tasksController.createTask(req, res, next));
TaskRouter.put('/:id', async (req, res, next) => errorHandler.validateId(req, res, next), async (req, res, next) => errorHandler.validateTaskBody(req, res, next), async (req, res, next) => tasksController.editTask(req, res, next));
TaskRouter.delete('/:id', async (req, res, next) => errorHandler.validateId(req, res, next), async (req, res, next) => tasksController.deleteTask(req, res, next));
exports.default = TaskRouter;
//# sourceMappingURL=TaskRouter.js.map