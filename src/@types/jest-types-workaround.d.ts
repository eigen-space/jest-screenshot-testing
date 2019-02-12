/**
 * This module is workaround to get types for custom matchers.
 * Actually we should try to get more deep in jest and typings for it.
 */
declare module 'jest-types-workaround' {

    export interface MatcherState {
        currentTestName: string;
        snapshotState: SnapshotState;
    }

    export interface SnapshotState {
        added: number;
        _snapshotData: {
            [key: string]: SnapshotData;
        };
        _dirty: boolean;
        _updateSnapshot: string;
        unmatched: number;

        save(): void;

        match(data: Object): { pass: boolean };
    }

    export type SnapshotData = string;
}