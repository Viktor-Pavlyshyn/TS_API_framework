import axios from 'axios';
import Urls from '../data/Urls';

export abstract class BaseMochaClient {

    protected getClient() {
        return axios.create({
            baseURL: Urls.baseUrl,
            timeout: 2000,
        });
    }
}