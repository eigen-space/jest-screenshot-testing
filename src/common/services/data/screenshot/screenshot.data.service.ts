import { BaseDataService } from '../base/base.data.service';
import { Config } from '../../../config/config';
import { Viewport } from '../../../types/viewport';

export class ScreenshotDataService extends BaseDataService {

    async make(html: string, viewport?: Viewport): Promise<Buffer> {
        const json = await this.post(Config.screenshoterUrl, { html, viewport });
        return Buffer.from(json.screenshot.data);
    }
}
