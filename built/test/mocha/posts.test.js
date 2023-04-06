"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_service_1 = __importDefault(require("../../apiClient/service/posts.service"));
const chai_1 = require("chai");
const jsonschema_1 = require("jsonschema");
const postSchema_json_1 = __importDefault(require("./../../jsonSchema/postSchema.json"));
const postBody_json_1 = __importDefault(require("./../../data/fakeBody/postBody.json"));
describe("Posts tests", function () {
    it("Get all posts", async function name() {
        const { status, data } = await posts_service_1.default.getAllPosts();
        const dataArr = data;
        (0, chai_1.expect)(status).to.equal(200);
        (0, chai_1.expect)(dataArr.length).to.not.equal(0);
    });
    it("Get post by id", async function name() {
        const { status, data } = await posts_service_1.default.getPostById(1);
        (0, chai_1.expect)(status).to.equal(200);
        (0, chai_1.expect)((0, jsonschema_1.validate)(data, postSchema_json_1.default).valid).to.be.true;
    });
    it("Add post", async function name() {
        const { status, data } = await posts_service_1.default.addPostWithBody(postBody_json_1.default);
        (0, chai_1.expect)(status).to.equal(201);
        (0, chai_1.expect)((0, jsonschema_1.validate)(data, postBody_json_1.default).valid).to.be.true;
        (0, chai_1.expect)(data.id).to.equal(101);
    });
});
