import * as React from 'react';
import { TestUtils } from './test.utils';
import * as renderer from 'react-test-renderer';

describe('TestUtils', () => {

    describe('#boxWrap', () => {
        const component = <div>Component</div>;

        it('should set defined box value', async () => {
            const box = { width: '43', height: '22' };
            const json = renderer.create(TestUtils.boxWrap(component, box)).toJSON();
            await expect({ component: json }).toMatchSnapshot();
        });

        it('should set default value, any key in box undefined', async () => {
            const box = {};
            const json = renderer.create(TestUtils.boxWrap(component, box)).toJSON();
            await expect({ component: json }).toMatchSnapshot();
        });
    });
});
