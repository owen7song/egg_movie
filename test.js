import { AxiosPromise, AxiosRequsetConfig } from '../types/index'
import dispatchRequest from './dispatchRequest';
export default class Axios {
    request(config: AxiosRequsetConfig): AxiosPromise {
        return dispatchRequest(config);
    }

    get(url: string, config?: AxiosRequsetConfig): AxiosPromise {
        return this.request(Object.assign(config || {}, {
            url: url,
            method: 'get'
        }));
    }

    delete(url: string, config?: AxiosRequsetConfig): AxiosPromise {
        return this.request(Object.assign(config || {}, {
            url: url,
            method: 'delete'
        }));
    }

    head(url: string, config?: AxiosRequsetConfig): AxiosPromise {
        return this.request(Object.assign(config || {}, {
            url: url,
            method: 'head'
        }));
    }

    options(url: string, config?: AxiosRequsetConfig): AxiosPromise {
        return this.request(Object.assign(config || {}, {
            url: url,
            method: 'options'
        }));
    }

    post(url: string, data?: any, config?: AxiosRequsetConfig) {
        return this.request(Object.assign(config || {}, {
            url: url,
            data: data,
            method: 'post'
        }));
    }

    put(url: string, data?: any, config?: AxiosRequsetConfig) {
        return this.request(Object.assign(config || {}, {
            url: url,
            data: data,
            method: 'put'
        }));
    }

    patch(url: string, data?: any, config?: AxiosRequsetConfig) {
        return this.request(Object.assign(config || {}, {
            url: url,
            data: data,
            method: 'patch'
        }));
    }

}
