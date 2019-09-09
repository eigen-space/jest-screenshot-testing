import * as React from 'react';
import { ReactElement } from 'react';
import { ReactWrapper } from 'enzyme';
import { Dictionary } from '@eigenspace/common-types/src/types/dictionary';

export interface BoxStyle {
    height?: string;
    width?: string;
    padding?: number;
}

export class TestUtils {

    /**
     * Used to wrap component into box to test absolute positioned elements.
     */
    static boxWrap(component: ReactElement, box: BoxStyle, props?: Dictionary): JSX.Element {
        const style: BoxStyle = { ...box };
        style.width = style.width ? `${style.width}px` : 'fit-content';
        style.height = style.height ? `${style.height}px` : 'auto';

        const childComponent = React.cloneElement(component, props);
        return <div style={style}>{childComponent}</div>;
    }

    /**
     * This method add class to element to be able use puppeteer's actions like hover and focus.
     */
    static emulateAction(wrapper: ReactWrapper, action: string, payload = ''): void {
        wrapper.getDOMNode().setAttribute(action, payload);
    }
}
