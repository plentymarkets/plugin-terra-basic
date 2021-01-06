import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ExampleComponentStateActions } from '../actions/example-component.actions';

export interface ExampleComponentStateModel {
    filter: any;
    table: { columnList: Array<string> };
}

@State<ExampleComponentStateModel>({
    name: 'exampleComponent',
    defaults: {
        filter: {
            name: 'test',
            date: '',
            value: 1
        },
        table: {
            columnList: ['select', 'firstName', 'lastName']
        }
    }
})
@Injectable()
export class ExampleComponentState {
    /**
     * Selector function to get the filter
     */
    @Selector()
    static filter(state: ExampleComponentStateModel) {
        return { ...state.filter };
    }

    /**
     * Selector function to get the columnList
     */
    @Selector()
    static tableColumnList(state: ExampleComponentStateModel) {
        return [...state.table.columnList];
    }

    /**
     * State function listening to two actions
     */
    @Action([ExampleComponentStateActions.Update, ExampleComponentStateActions.UpdateFilter])
    public updateViewState(ctx: StateContext<any>, { viewState }) {
        const currentState: Set<any> = ctx.getState();
        ctx.patchState({ ...currentState, ...viewState });
    }
}
