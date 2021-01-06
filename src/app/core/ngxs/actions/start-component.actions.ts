export namespace StartComponentStateActions {
    export class Add {
        static readonly type: string = '[ViewState] Add View State';
        constructor(public viewState: any) {}
    }
}
