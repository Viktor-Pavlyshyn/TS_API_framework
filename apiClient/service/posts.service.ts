import jsonRequest from "./../json.request";

class PostsService {
    endpoint: string = '/posts';

    async getAllPosts() {
        return await jsonRequest
        .method('GET')
        .endpoint(this.endpoint)
        .sendRequest();
    }

    async getPostById(postId: number) {
        return await jsonRequest
        .method('GET')
        .endpoint(`${this.endpoint}/${postId}`)
        .sendRequest();
    }

    async addPostWithBody(postBody: Object) {
        return await jsonRequest
        .method("POST")
        .endpoint(this.endpoint)
        .body(postBody)
        .sendRequest();
    }
}
export default new PostsService();