# Jest Screenshot Testing

Library adds an ability to test components using screenshot snapshots. It extends jest,
adding the `toMatchComponentImageAsyncReact` method.

# Features

Testing React-components (react elements, shallow and mount from enzyme).

Supporting another frameworks and simple css / html are in progress.

# Installation

1. Install all requirements to dev environment.
2. Add the `@eigenspace/jest-screenshot-testing` as dependency.
3. Import the matcher (React example):
    ```
    import { toMatchComponentImageAsyncReact as toMatchComponentImageAsync } from '@eigenspace/jest-screenshot-testing';
    ```
4. Import `expect` and add to `expect.setup.tsx`:
    ```
    expect.extend({ toMatchComponentImageAsync });
    ```
5. Import the configuration class for the matcher and set settings:
    ```
    ReactMatcherConfig.globalStyles = (GlobalStyles as any).globalStyle;
    ReactMatcherConfig.themeWrapper = ThemeWrapper;
    ReactMatcherConfig.screenshoterUrl = environment.apiUrls.screenshoterUrl;
    ReactMatcherConfig.serializer = serializer.styleSheetSerializer;
    ```
    
    where:
    - serializer is `jest-styled-components/serializer`
    
6. Don't forget add: `'<rootDir>/config/jest/setup/expect.setup.tsx'` to `setupFiles`.

# Requirements for consumer

* react
* react-dom
* enzyme
* enzyme-to-json
* jest
* jest-image-snapshot
* react-test-renderer

# Usage example

```
const props = { ...defaultProps, mode: ButtonModeType.PRIMARY };
await expect({ component, props }).toMatchComponentImageAsync();
```

# Why do we have that dependencies?

* `enzyme` - api-helper for Jest testing. Added abilities to set state for components 
and get an instance (real class). 
* `enzyme-to-json` - a requirement for jest-screenshot-testing library.
* `react` - we use react :) But look at preact. It is an option.
Honestly, it should be peer dependency for component library. It does not 
part of the library.    
* `react-dom` - it provides DOM-specific methods to step out from react-world
to DOM-world and is used on top level of application. It is peer dependency of
`react-styleguidist`. 
* `react-test-renderer` - render React components to pure JavaScript objects.
* `jest` - testing framework to write unit specs (including snapshots).
* `jest-image-snapshot` - library provides ability to check difference between two image


# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes tslint rules, config for typescript.
* `@types/*` - contains type definitions for specific library.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `ts-loader` - it is used to load typescript code with webpack. 
* `tslint` - it checks TypeScript code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
See `webpack.config.js`.
* `webpack` - it create app bundle for dev mode and production. 
* `copy-webpack-plugin` - used for copy package.json in package bundle.
* `clean-webpack-plugin` - used for clean bundle before run building.
* `husky` - used for configure git hooks.
* `lint-staged` - used for configure linters against staged git files.
* `whatwg-fetch` - this project is a polyfill for `window.fetch`.
* `webpack-cli` - command line interface dor webpack.