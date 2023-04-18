import jsonRequest from "../json.request";
import { BaseController } from "./base.contorller";

export class UserController extends BaseController {
    endpoint: string = '/';

    async login(credentials: Map<string, string>) {
        return await jsonRequest
            .endpoint(this.endpoint)
            .method("POST")
            .params(credentials)
            .sendRequest();
    }
}