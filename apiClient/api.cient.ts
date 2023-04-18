import { CookieJar } from "tough-cookie";
import { PostsController } from "./controllers/posts.controller";
import { UserController } from "./controllers/user.controller";

export class ApiClient {
    public readonly posts: PostsController;
    public readonly user: UserController;

    constructor(params?: { token?: string, cookies?: CookieJar }) {
        const defaultParams = {
            cookies: new CookieJar()
        }

        const mergedParams = {
            ...defaultParams,
            ...params
        }

        this.posts = new PostsController(mergedParams);
        this.user = new UserController(mergedParams);
    }

    static unautorized() {

        return new ApiClient();
    }

    static async loginAs(credentials: Map<string, string>) {
        return new ApiClient({
            token: (await ApiClient.unautorized().user.login(credentials)).headers['token'] as string
        })
    }
}