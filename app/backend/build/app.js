"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const TaskRouter_1 = require("./routes/TaskRouter");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        const acessControll = (_req, res, next) => {
            res.header('Acess-Controll-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(acessControll);
        this.app.use(express.json());
        this.app.use('/tasks', TaskRouter_1.default);
    }
    start(PORT) {
        this.app.listen(PORT);
        console.log(`listening on port ${PORT}`);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map