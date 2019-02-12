import { Html } from '../../../../@types/common';
import { Css } from '../../../../@types/common';

export class LayoutMakerAppService {

    // noinspection JSMethodCanBeStatic
    makeStringHtmlPage(html: Html, styles: Css): Html {
        // noinspection HtmlRequiredLangAttribute, CssUnknownProperty
        return `
            <!doctype html>
            <html>
                <head>
                    <title>Do not remove it</title>
                    <style>
                        *, *::after, *::before {
                            transition-delay: 0s !important;
                            transition-duration: 0s !important;
                            animation-delay: -0.0001s !important;
                            animation-duration: 0s !important;
                            animation-play-state: paused !important;
                            caret-color: transparent !important;
                        }
                    </style>
                    <style>${styles}</style>
                </head>
                <body>${html}</body>
            </html>
        `;
    }
}