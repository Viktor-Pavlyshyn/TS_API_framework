"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_service_1 = __importDefault(require("./../../../apiClient/service/posts.service"));
const chai_1 = require("chai");
const jsonschema_1 = require("jsonschema");
const postSchema_json_1 = __importDefault(require("./../../../jsonSchema/postSchema.json"));
const postBody_json_1 = __importDefault(require("./../../../data/fakeBody/postBody.json"));
const cucumber_1 = require("@cucumber/cucumber");
let response;
(0, cucumber_1.Given)('User gets all posts', async function () {
    response = await posts_service_1.default.getAllPosts();
});
(0, cucumber_1.Then)('User recives status code {int}', async function (statusCode) {
    (0, chai_1.expect)(response.status).to.equal(statusCode);
});
(0, cucumber_1.Then)('User recives more then {int} posts grom Get posts response', async function (postsNumber) {
    const dataArr = response.data;
    (0, chai_1.expect)(dataArr.length > postsNumber).to.be.true;
});
(0, cucumber_1.Then)('User gets post by id {int}', async function (postId) {
    response = await posts_service_1.default.getPostById(postId);
});
(0, cucumber_1.Then)('User gets valid jsonSchema for Get posts.id response', async function () {
    (0, chai_1.expect)((0, jsonschema_1.validate)(response.data, postSchema_json_1.default).valid).to.be.true;
});
(0, cucumber_1.Given)('User adds new post', async function () {
    response = await posts_service_1.default.addPostWithBody(postBody_json_1.default);
});
(0, cucumber_1.Then)('User gets valid jsonSchema for Post posts.id response', async function () {
    (0, chai_1.expect)((0, jsonschema_1.validate)(response.data, postBody_json_1.default).valid).to.be.true;
});
