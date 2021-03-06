import { cloneElement, createElement, ReactElement } from 'react';
import { CommonWrapper, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { Html } from '../../@types/common';
import { Dictionary } from '@eigenspace/common-types/src/types/dictionary';
import { matchScreenshot } from '../screenshot-matcher';
import { renderToStaticMarkup } from 'react-dom/server';
import { ReactMatcherConfig } from './react-matcher-config';
import { Device } from '../..';
import { MatcherState } from 'jest-types-workaround';

interface ToMatchArgs {
    component: ReactElement<Dictionary> | ReactWrapper | ShallowWrapper;
    device: Device;
    commonStyles: CSS;
    props: Dictionary;
    componentSource?: ReactElement<Dictionary>;
}

export async function toMatchComponentImageAsyncReact(data: ToMatchArgs): Promise<Dictionary> {
    if (!ReactMatcherConfig.serializer) {
        throw new Error('Serializer styles is not set. Please, set it in ReactMatcherConfig.');
    }

    const { component, device, commonStyles, props, componentSource } = data;

    let preparedComponent = component;
    let rawHtml: Html;
    let json: ReactTestRendererJSON | null;

    if (component instanceof ReactWrapper) {
        rawHtml = component.html();
        json = toJson(component);
    } else if (component instanceof ShallowWrapper && componentSource) {
        const mountComponent = mount<Dictionary>(componentSource);
        mountComponent.setProps(props);
        mountComponent.instance().forceUpdate();
        const state = component.instance().state;
        mountComponent.instance().setState(state);
        rawHtml = mountComponent.html();
        json = toJson(mountComponent as CommonWrapper);
    } else {
        const componentClone = cloneElement(component as ReactElement<Dictionary>, props);

        if (ReactMatcherConfig.themeWrapper) {
            preparedComponent = createElement(ReactMatcherConfig.themeWrapper, {}, componentClone);
        } else {
            preparedComponent = componentClone;
        }
        rawHtml = renderToStaticMarkup(preparedComponent);
        json = create(preparedComponent).toJSON();
    }

    const styleSnapshot = ReactMatcherConfig.serializer.print(json, () => rawHtml);
    const separationIndex = styleSnapshot.indexOf('<');
    const html = styleSnapshot.slice(separationIndex);
    const css = styleSnapshot.slice(0, separationIndex);

    let globalStyles = '';
    if (ReactMatcherConfig.globalStyles) {
        // There no correct interface for GlobalStyles.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalStyles += (ReactMatcherConfig.globalStyles as any).rules.join('');
    }

    if (commonStyles) {
        globalStyles += commonStyles;
    }

    if (globalStyles) {
        globalStyles += '\n';
    }

    // @ts-ignore
    return matchScreenshot(this as MatcherState, html, `${globalStyles}${css}`, device);
}
