import { Device } from '../common/entities/device';

export const devices = {
    mobile: new Device({
        name: 'mobile',
        viewport: { width: 576, height: 720 }
    }),
    table: new Device({
        name: 'tablet',
        viewport: { width: 768, height: 1024 }
    }),
    laptop: new Device({
        name: 'laptop',
        viewport: { width: 992, height: 720 }
    }),
    desktop: new Device({
        name: 'desktop',
        viewport: { width: 1200, height: 1600 }
    })
};
