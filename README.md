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
