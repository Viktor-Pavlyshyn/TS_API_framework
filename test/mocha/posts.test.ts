import { expect } from 'chai';
import { validate } from "jsonschema";
import postSchema from "./../../jsonSchema/postSchema.json";
import postBody from "./../../data/fakeBody/postBody.json";
import { ApiClient } from '../../apiClient/api.cient';

describe("Posts tests", function () {

    it("Get all posts", async function name() {
        const { status, data } = await ApiClient.unautorized().posts.getAllPosts();

        const dataArr: [] = data;

        expect(status).to.equal(200);
        expect(dataArr.length).to.not.equal(0);
    })

    it("Get post by id", async function name() {
        const { status, data } = await ApiClient.unautorized().posts.getPostById(1);

        expect(status).to.equal(200);
        expect(validate(data, postSchema).valid).to.be.true;
    })

    it("Add post", async function name() {
        const { status, data } = await ApiClient.unautorized().posts.addPostWithBody(postBody);

        expect(status).to.equal(201);
        expect(validate(data, postBody).valid).to.be.true;
        expect(data.id).to.equal(101);
    })
})