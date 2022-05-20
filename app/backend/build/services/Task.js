"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../database/models/Task");
class TaskService {
    constructor() {
        this.taskModel = Task_1.default;
    }
    async getAll() {
        const result = await this.taskModel.findAll();
        return result;
    }
    async create(taskData) {
        const created = await this.taskModel.create(taskData);
        return created;
    }
    async edit(id, taskData) {
        await this.taskModel.update(taskData, { where: { id } });
    }
    async delete(id) {
        await this.taskModel.destroy({ where: { id } });
    }
}
exports.default = TaskService;
//# sourceMappingURL=Task.js.map