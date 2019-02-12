declare module 'jest-styled-components/serializer' {

    import { ReactTestRendererJSON } from 'react-test-renderer';
    export const styleSheetSerializer: Serializer;

    export interface Serializer {
        print(reactRenderedJson: ReactTestRendererJSON | null, print: () => string): string;
    }
}