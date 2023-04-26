import jsonRequest from "../json.request";
import { ResponseValidator } from "../response";
import { BaseController } from "./base.contorller";

export class UserController extends BaseController {
    endpoint: string = '/';

    async login(credentials: Map<string, string>) {
        let responce = await jsonRequest
            .endpoint(this.endpoint)
            .method("POST")
            .params(credentials)
            .sendRequest();

        return new ResponseValidator(responce).getResponse();
    }
}