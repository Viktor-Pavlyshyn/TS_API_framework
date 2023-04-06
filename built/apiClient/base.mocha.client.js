"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMochaClient = void 0;
const axios_1 = __importDefault(require("axios"));
const Urls_1 = __importDefault(require("../data/Urls"));
class BaseMochaClient {
    getClient() {
        return axios_1.default.create({
            baseURL: Urls_1.default.baseUrl,
            timeout: 2000,
        });
    }
}
exports.BaseMochaClient = BaseMochaClient;
