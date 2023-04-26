import { AxiosResponse } from "axios";
import { allure } from 'allure-mocha/dist/MochaAllureReporter';
 
export class ResponseValidator {

    constructor(protected response: AxiosResponse<any, any>) {

        this.addResponseBodyToAllure()
    }

    public getResponse() {

        return this.response;
    }

    private addResponseBodyToAllure(){
        const stepName = `[${this.response.status}] ${this.response.config.method?.toLocaleUpperCase()} ${this.response.config.url}`;

        allure.step(stepName, () => {

            if (this.response?.data) {
                allure.attachment(
                    'JSON RESPONSE BODY',
                    JSON.stringify(this.response?.data, null, 2),
                    'application/json' as any
                )
            }
        })
    }

}