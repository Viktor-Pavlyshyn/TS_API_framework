import type { Method } from "axios";
import axios, { AxiosInstance } from 'axios';
import Urls from '../data/Urls';

class JsonRequest {

    protected requestConfig: any = {
        baseURL: Urls.baseUrl,
        timeout: 2000,
        responseType: 'json',
        withCredentials: true,
    };

    public endpoint(endpoint: string): this {

        this.requestConfig.url = endpoint;
        return this;
    }

    public method(method: Method): this {

        this.requestConfig.method = method;
        return this;
    }

    public headers(headers: Map<string, string>): this {

        this.requestConfig.headers = Object.fromEntries(headers);
        return this;
    }

    public params(params: Map<string, string>): this {

        this.requestConfig.parmas = Object.fromEntries(params);
        return this;
    }

    public body(body: Object): this {

        this.requestConfig.data = body;
        return this;
    }

    public sendRequest() {
        let axiosInstance = axios.create();

        axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
        this.printRequestConfig(axiosInstance);

        return axiosInstance.request(this.requestConfig);
    }

    private printRequestConfig(axiosInstance: AxiosInstance): void {

        axiosInstance.interceptors.request.use(function (config) {

            console.log('===========REQUEST CONFIG==============');
            console.log(config);
            console.log('=======================================');

            return config;
        });
    }
}
export default new JsonRequest();