import { BaseDataServiceStub } from './base.data.service.stub';
import { RequestMethodType } from '../../../enum/request-method.enum';

describe('BaseDataServiceStub', () => {
    let service: BaseDataServiceStub;

    global.fetch = jest.fn();
    const fetch = global.fetch;
    fetch.mockReturnValue(Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
    }));

    beforeEach(() => {
        service = new BaseDataServiceStub();
    });

    it('should send correct get request to specified url', () => {
        service.get('some-url');
        expect(fetch).toBeCalledWith('some-url', { method: RequestMethodType.GET });
    });

    it('should send correct json data', () => {
        const data = { type: 'JsonData' };

        service.post('', data);

        const body = JSON.stringify(data);
        const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
        const method = RequestMethodType.POST;
        expect(fetch).toBeCalledWith('', { body, headers, method });
    });

    it('should send correct request when data empty', () => {
        service.post('');
        expect(fetch).toBeCalledWith('', { method: RequestMethodType.POST });
    });

    it('should throw error if response failed', () => {
        const data = { type: 'JsonData' };
        fetch.mockReturnValue(Promise.resolve({
            ok: false,
            json: () => Promise.resolve('ERROR')
        }));
        return expect(service.post('', data)).rejects.toEqual('ERROR');
    });
});
