export namespace ExampleComponentStateActions {
    export class Update {
        static readonly type: string = '[TableComponent] Update View State';
        constructor(public viewState: any) {}
    }

    export class UpdateFilter {
        static readonly type: string = '[FilterComponent] Update Filter State';
        constructor(public viewState: any) {}
    }
}
