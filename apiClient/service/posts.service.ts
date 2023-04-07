import { ApiMochaCient } from '../rest.mocha.client';

class PostsService extends ApiMochaCient {
    endpoint: string = '/posts';

    async getAllPosts() {
        return await this.getMethod(this.endpoint, new Map(), new Map());
    }

    async getPostById(postId: number) {
        return await this.getMethod(`${this.endpoint}/${postId}`, new Map(), new Map());
    }

    async addPostWithBody(postBody: Object) {
        return await this.postMethod(this.endpoint, new Map(), postBody);
    }
}
export default new PostsService();