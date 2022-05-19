"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.default = new sequelize_1.Sequelize(database_1.default);
//# sourceMappingURL=index.js.map