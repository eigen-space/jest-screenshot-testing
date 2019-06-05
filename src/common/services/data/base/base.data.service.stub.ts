import { BaseDataService } from './base.data.service';
import { Dictionary } from '@eigenspace/common-types/src/types/dictionary';

export class BaseDataServiceStub extends BaseDataService {

    get(url: string): Promise<Dictionary> {
        return super.get(url);
    }

    post(url: string, data?: Object): Promise<Dictionary> {
        return super.post(url, data);
    }
}
