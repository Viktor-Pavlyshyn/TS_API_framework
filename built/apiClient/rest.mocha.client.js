"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMochaCient = void 0;
const base_mocha_client_1 = require("./base.mocha.client");
class ApiMochaCient extends base_mocha_client_1.BaseMochaClient {
    //GET method
    async getMethod(endpoint, header) {
        header.set('Content-Type', 'application/json');
        return await this.getClient().get(endpoint, {
            headers: Object.fromEntries(header),
        });
    }
    //POST method
    async postMethod(endpoint, header, body) {
        header.set('Content-Type', 'application/json');
        return await this.getClient().post(endpoint, body, {
            headers: Object.fromEntries(header),
        });
    }
}
exports.ApiMochaCient = ApiMochaCient;
