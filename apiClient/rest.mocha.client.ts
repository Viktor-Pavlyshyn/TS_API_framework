import { BaseMochaClient } from "./base.mocha.client";

export class ApiMochaCient extends BaseMochaClient {

    //GET method
    protected async getMethod(endpoint: string, header: Map<string, string>, param: Map<string, string>) {

        return await this.getClient().get(
            endpoint,
            {
                headers: (param.size > 0) ? Object.fromEntries(header) : undefined,
                params: (param.size > 0) ? Object.fromEntries(param) : undefined,
            },
        )
    }


    //POST method
    protected async postMethod(endpoint: string, header: Map<string, string>, body: Object) {

        header.set('Content-Type', 'application/json');

        return await this.getClient().post(
            endpoint,
            body,
            {
                headers: Object.fromEntries(header),
            }
        )
    }
}
