import { ReactElement } from 'react';

export {};

declare global {

    namespace jest {

        export interface Matchers<R> {
            toMatchComponentImageAsync(): R;
            toMatchImageSnapshot(component: ReactElement<{}>, customName: string): R;
        }
    }
}
