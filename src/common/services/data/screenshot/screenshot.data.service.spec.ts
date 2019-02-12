import { ScreenshotDataService } from './screenshot.data.service';
import { Dictionary } from '../../../types/dictionary';
import { RequestMethodType } from '../../../enum/request-method.enum';
import { Config } from '../../../config/config';

describe('ScreenshotDataService', () => {
    let service: ScreenshotDataService;

    global.fetch = jest.fn();
    const fetch = global.fetch;

    function mockFetch(value = 'data'): void {
        fetch.mockReturnValue(Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ screenshot: { data: Buffer.from(value) }  })
        }));
    }

    beforeEach(() => {
        service = new ScreenshotDataService();
    });

    describe('#make', () => {

        it('should send correct request with params', () => {
            mockFetch();

            service.make('html');

            const checkedBody: Dictionary = {
                body: JSON.stringify({ html: 'html' }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: RequestMethodType.POST
            };

            expect(fetch).toBeCalledWith(Config.screenshoterUrl, checkedBody);
        });

        it('should correct transform data from remote server', async () => {
            const response = 'screenshot';
            mockFetch(response);

            const result = await service.make('html');

            expect(result).toEqual(Buffer.from(response));
        });
    });
});
