import { ComponentClass } from 'react';
import { Config } from '../../common/config/config';

export class ReactMatcherConfig {
    static globalStyles: any;
    static serializer: any;
    static themeWrapper: ComponentClass;

    // noinspection JSUnusedGlobalSymbols
    static set screenshoterUrl(value: string) {
        Config.screenshoterUrl = value;
    }
}