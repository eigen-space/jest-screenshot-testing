import { Dictionary } from '../../../types/dictionary';
import { RequestMethodType } from '../../../enum/request-method.enum';

export class BaseDataService {

    protected get(url: string): Promise<Dictionary> {
        return this.request(url, RequestMethodType.GET);
    }

    protected post(url: string, data?: Dictionary): Promise<Dictionary> {
        return this.request(url, RequestMethodType.POST, data);
    }

    // noinspection JSMethodCanBeStatic
    private request(url: string, method: string, data?: Dictionary): Promise<Dictionary> {
        let params = { method } as RequestInit;

        if (data) {
            const body = JSON.stringify(data);
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            };
            params = { ...params, headers, body };
        }

        return fetch(url, params)
            .then(async response => {
                const json = await response.json();
                if (response.ok) {
                    return json;
                }

                throw json;
            });
    }
}