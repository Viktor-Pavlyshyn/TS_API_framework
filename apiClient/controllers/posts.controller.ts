import jsonRequest from "../json.request";
import { BaseController } from "./base.contorller";

 export class PostsController extends BaseController {
    endpoint: string = '/posts';

    async getAllPosts() {
        return await jsonRequest
        .method('GET')
        .endpoint(this.endpoint)
        .headers(new Map().set("token", this.params.token))
        .sendRequest();
    }

    async getPostById(postId: number) {
        return await jsonRequest
        .method('GET')
        .endpoint(`${this.endpoint}/${postId}`)
        .headers(new Map().set("token", this.params.token))
        .sendRequest();
    }

    async addPostWithBody(postBody: Object) {
        return await jsonRequest
        .method("POST")
        .endpoint(this.endpoint)
        .headers(new Map().set("token", this.params.token))
        .body(postBody)
        .sendRequest();
    }
}