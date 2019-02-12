declare module 'jest-screenshot-testing';

// We manually set out ts-bundle because dts-bundle plugin doesn't work.
// @ts-ignore
export * from './types/screenshot-matcher/react/react-to-match-image-snapshot';
// @ts-ignore
export * from './types/screenshot-matcher/react/react-matcher-config';
