"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// import OtherModel from './OtherModel';
class Tasks extends sequelize_1.Model {
}
Tasks.init({
    taskId: {
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'Tasks',
    timestamps: true,
});
exports.default = Tasks;
//# sourceMappingURL=Task.js.map