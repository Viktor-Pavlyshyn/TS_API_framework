import jsonRequest from "../json.request";
import { ResponseValidator } from "../response";
import { BaseController } from "./base.contorller";

export class PostsController extends BaseController {
    endpoint: string = '/posts';

    async getAllPosts() {
        let responce = await jsonRequest
            .method('GET')
            .endpoint(this.endpoint)
            .headers(new Map().set("token", this.params.token))
            .sendRequest();

        return new ResponseValidator(responce).getResponse();
    }

    async getPostById(postId: number) {
        let responce = await jsonRequest
            .method('GET')
            .endpoint(`${this.endpoint}/${postId}`)
            .headers(new Map().set("token", this.params.token))
            .sendRequest();

        return new ResponseValidator(responce).getResponse();
    }

    async addPostWithBody(postBody: Object) {
        let responce = await jsonRequest
            .method("POST")
            .endpoint(this.endpoint)
            .headers(new Map().set("token", this.params.token))
            .body(postBody)
            .sendRequest();

        return new ResponseValidator(responce).getResponse();
    }
}