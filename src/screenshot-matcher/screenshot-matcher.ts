import { MatcherState } from 'jest-types-workaround';
import { Css, Html } from '../@types/common';
import { Dictionary } from '../common/types/dictionary';
import { createHash } from 'crypto';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ScreenshotDataService } from '../common/services/data/screenshot/screenshot.data.service';
import { LayoutMakerAppService } from '../common/services/app/layout-maker/layout-maker.app.service';

const photoMaker = new ScreenshotDataService();
const layoutMaker = new LayoutMakerAppService();

export async function matchScreenshot(context: MatcherState, html: Html, css: Css): Promise<Dictionary> {
    const page = layoutMaker.makeStringHtmlPage(html, css);

    const pageHash = createHash('sha1').update(page).digest('base64');

    context.snapshotState._updateSnapshot = 'none';
    const snapshotMatch = context.snapshotState.match({ received: pageHash, testName: context.currentTestName });
    context.snapshotState.unmatched = 0;

    const isTestFirstRun = context.snapshotState.added;
    if (!snapshotMatch.pass || isTestFirstRun) {
        const screenshot = await photoMaker.make(page);
        context.snapshotState._updateSnapshot = 'new';

        // Different type with toMatchImageSnapshot
        // @ts-ignore
        const screenshotMatch = toMatchImageSnapshot.call(context, screenshot);

        if (screenshotMatch.pass) {
            updateSnapshot(context, pageHash);
        }

        return screenshotMatch;
    }

    return snapshotMatch;
}

function updateSnapshot(matcherState: MatcherState, value: string): void {
    const { currentTestName, snapshotState } = matcherState;

    const keyPattern = new RegExp(`${currentTestName} \\d+$`);
    const matchedNames = Object.keys(snapshotState._snapshotData).filter(key => keyPattern.test(key));
    const testName = matchedNames[0] || `${currentTestName} 1`;

    snapshotState._snapshotData[testName] = `"${value}"`;
    snapshotState._dirty = true;
    snapshotState.save();
}