import PostsService from './../../../apiClient/service/posts.service';
import { expect } from 'chai';
import { validate } from "jsonschema";
import postSchema from "./../../../jsonSchema/postSchema.json";
import postBody from "./../../../data/fakeBody/postBody.json";
import { Given, When, Then } from "@cucumber/cucumber";

let response: any;

Given('User gets all posts', async function () {

    response = await PostsService.getAllPosts();
});

Then('User recives status code {int}', async function (statusCode: number) {

    expect(response.status).to.equal(statusCode);
});

Then('User recives more then {int} posts grom Get posts response', async function (postsNumber: number) {

    const dataArr: [] = response.data;

    expect(dataArr.length > postsNumber).to.be.true;
});

Then('User gets post by id {int}', async function (postId: number) {

    response = await PostsService.getPostById(postId);
});

Then('User gets valid jsonSchema for Get posts.id response', async function () {

    expect(validate(response.data, postSchema).valid).to.be.true;
});

Given('User adds new post', async function () {

    response = await PostsService.addPostWithBody(postBody);
});

Then('User gets valid jsonSchema for Post posts.id response', async function () {

    expect(validate(response.data, postBody).valid).to.be.true;
});