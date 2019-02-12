import { ComponentClass } from 'react';
import { Config } from '../../common/config/config';
import { GlobalStyleComponent } from 'styled-components';
import { Serializer } from 'jest-styled-components/serializer';

export class ReactMatcherConfig {
    static globalStyles: GlobalStyleComponent<{}, {}>;
    static serializer: Serializer;
    static themeWrapper: ComponentClass;

    // noinspection JSUnusedGlobalSymbols
    static set screenshoterUrl(value: string) {
        Config.screenshoterUrl = value;
    }
}