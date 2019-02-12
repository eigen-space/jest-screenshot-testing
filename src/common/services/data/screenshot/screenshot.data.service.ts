import { BaseDataService } from '../base/base.data.service';
import { Config } from '../../../config/config';

export class ScreenshotDataService extends BaseDataService {

    async make(html: string): Promise<Buffer> {
        const json = await this.post(Config.screenshoterUrl, { html });
        return Buffer.from(json.screenshot.data);
    }
}