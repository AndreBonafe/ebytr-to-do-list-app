"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require("sequelize");
const _1 = require(".");
// import OtherModel from './OtherModel';
class Tasks extends sequelize_1.Model {
}
Tasks.init({
    taskId: {
        type: sequelize.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    taskName: {
        type: sequelize.STRING,
    },
    status: {
        type: sequelize.STRING,
    },
    createdAt: {
        type: sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
        type: sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'Tasks',
    timestamps: true,
});
exports.default = Tasks;
//# sourceMappingURL=Task.js.map