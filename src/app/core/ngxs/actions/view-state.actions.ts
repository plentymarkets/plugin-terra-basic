export namespace ViewStateActions {
    export class Add {
        static readonly type: string = '[ViewState] Add View State';
        constructor(public viewKey: string, public viewState: any) {}
    }

    export class Update {
        static readonly type: string = '[ViewState] Update View State';
        constructor(public viewKey: string, public viewState: any) {}
    }

    export class UpdateFilter {
        static readonly type: string = '[FilterComponent] Update Filter State';
        constructor(public viewKey: string, public viewState: any) {}
    }
}
