"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_mocha_client_1 = require("../rest.mocha.client");
class PostsService extends rest_mocha_client_1.ApiMochaCient {
    constructor() {
        super(...arguments);
        this.endpoint = '/posts';
    }
    async getAllPosts() {
        return await this.getMethod(this.endpoint, new Map());
    }
    async getPostById(postId) {
        return await this.getMethod(`${this.endpoint}/${postId}`, new Map());
    }
    async addPostWithBody(postBody) {
        return await this.postMethod(this.endpoint, new Map(), postBody);
    }
}
exports.default = new PostsService();
