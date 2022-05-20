"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class TaskController {
    constructor() {
        this.taskService = new services_1.default();
    }
    async getAllTasks(_req, res, next) {
        try {
            const result = await this.taskService.getAll();
            return res.status(200).json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async createTask(req, res, next) {
        try {
            const tasks = req.body;
            const created = await this.taskService.create(tasks);
            return res.status(201).json(created);
        }
        catch (e) {
            next(e);
        }
    }
    async editTask(req, res, next) {
        try {
            const tasks = req.body;
            const { id } = req.params;
            await this.taskService.edit(Number(id), tasks);
            return res.status(200).json({ message: `task #${id} successfully updated` });
        }
        catch (e) {
            console.log(e);
            next(e);
        }
    }
    async deleteTask(req, res, next) {
        try {
            const { id } = req.params;
            await this.taskService.delete(Number(id));
            return res.status(204).end();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = TaskController;
//# sourceMappingURL=Task.js.map