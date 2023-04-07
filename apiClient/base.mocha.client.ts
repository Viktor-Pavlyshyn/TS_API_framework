import axios, { AxiosInstance } from 'axios';
import Urls from '../data/Urls';

export abstract class BaseMochaClient {

    protected getClient(): AxiosInstance {
        let axiosInstance = axios.create({
            baseURL: Urls.baseUrl,
            timeout: 2000,
            responseType: 'json',
        });

        this.printRequestConfig(axiosInstance);

        return axiosInstance;
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