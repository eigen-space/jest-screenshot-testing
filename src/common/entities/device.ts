export class Device {
    name: string;
    viewport: {
        width: number;
        height: number;
    };

    constructor(data = {} as Device) {
        this.name = data.name || '';
        this.viewport = data.viewport;
    }
}
