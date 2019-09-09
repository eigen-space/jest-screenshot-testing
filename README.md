# Jest Screenshot Testing

Library adds an ability to test components using screenshot snapshots. It extends jest,
adding the `toMatchComponentImageAsyncReact` method.

# Features

Testing React-components (react elements, shallow and mount from enzyme).

Supporting another frameworks and simple css / html are in progress.

# Installation

1. Install all requirements to dev environment.
2. Add the `@eigenspace/jest-screenshot-testing` as dependency.
3. Import the patcher (React example):
    ```
        import { MatchImagePatcher } from '@eigenspace/jest-screenshot-testing';
    ```
4. Define configuration according to PatcherArgs interface:
    ```
    const options = {
        screenshoterUrl: environment.apiUrls.screenshoterUrl,
        globalStyles: TestGlobalStyles.globalStyle,
        themeWrapper: Init
    };
    ```
5. Pass configuration to patcher
    ```
        new MatchImagePatcher().do(options);
    ```
6. Don't forget add: `'<rootDir>/config/jest/setup/expect.setup.tsx'` to `setupFiles`.


# Environmental requirements

* `react`: `16.x`,
* `react-dom`: `16.x`,
* `jest`: `24.x`,
* `jest-styled-components`: `>= 6.3.3`,
* `styled-components`: `4.x`

# Usage example

```
const props = { ...defaultProps, mode: ButtonModeType.PRIMARY };
await expect({ component, props }).toMatchComponentImageAsync();
```

# Why do we have that dependencies?

* `enzyme` - api-helper for Jest testing. Added abilities to set state for components 
and get an instance (real class). 
* `enzyme-to-json` - a requirement for jest-screenshot-testing library.
`react-styleguidist`. 
* `react-test-renderer` - render React components to pure JavaScript objects.
* `jest-image-snapshot` - library provides ability to check difference between two image
* `@eigenspace/jest-testing-utils` - contains jest helpers and patchers.

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/common-types` - contains common type definitions for our libraries.
* `@eigenspace/eslint-config-codestyle` - package with eslint configurations.
* `@eigenspace/helper-scripts` - common scripts for dev. environment.
* `@types/*` - contains type definitions for specific library.
* `husky` - used for configure git hooks.
* `jest` - testing framework to write unit specs (including snapshots).
* `lint-staged` - used for configure linters against staged git files.
* `react` - used as utils for snapshot testing.    
* `react-dom` - used for render static markup.
* `jest-styled-components` - a set of utilities for testing Styled Components with Jest.
* `styled-components` - requirement of jest-styled-components.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `whatwg-fetch` - this project is a polyfill for `window.fetch`.
