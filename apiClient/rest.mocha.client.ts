import { BaseMochaClient } from "./base.mocha.client";

export class ApiMochaCient extends BaseMochaClient {

    //GET method
    protected async getMethod(endpoint: string, header: Map<string, string>) {

        header.set('Content-Type', 'application/json');

        return await this.getClient().get(
            endpoint,
            {
                headers: Object.fromEntries(header),
            }
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
