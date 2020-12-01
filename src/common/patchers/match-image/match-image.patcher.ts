import { styleSheetSerializer } from 'jest-styled-components/serializer';
import 'whatwg-fetch';
import { ComponentClass } from 'react';
import { GlobalStyleComponent } from 'styled-components';
import { Patcher } from '@eigenspace/jest-testing-utils';
import { ReactMatcherConfig } from '../../..';
import { toMatchComponentImageAsyncReact } from '../../..';
const expect = require('expect');

export interface PatcherArgs {
    globalStyles?: GlobalStyleComponent<{}, {}>;
    themeWrapper?: ComponentClass;
    screenshoterUrl: string;
}

export class MatchImagePatcher implements Patcher<PatcherArgs> {

    // noinspection JSMethodCanBeStatic
    do(options: PatcherArgs): void {
        ReactMatcherConfig.globalStyles = options.globalStyles;
        ReactMatcherConfig.themeWrapper = options.themeWrapper;
        ReactMatcherConfig.screenshoterUrl = options.screenshoterUrl;
        ReactMatcherConfig.serializer = styleSheetSerializer;

        expect.extend({ toMatchComponentImageAsync: toMatchComponentImageAsyncReact });
    }
}
