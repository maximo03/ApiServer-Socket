"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var enviroment_1 = require("../global/enviroment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = enviroment_1.SEVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
