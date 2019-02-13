export {};

declare global {

    namespace jest {

        export interface Matchers<R> {
            toMatchComponentImageAsync(): R;
        }
    }
}
