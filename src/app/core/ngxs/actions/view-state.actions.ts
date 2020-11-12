export namespace ViewStateActions {
    export class Add {
        static readonly type: string = '[ViewState] Add View State';
        constructor(public viewKey: string, public viewState: any) {}
    }
}
