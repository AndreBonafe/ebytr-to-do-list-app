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
}
exports.default = TaskService;
//# sourceMappingURL=Task.js.map