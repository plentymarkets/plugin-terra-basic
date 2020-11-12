import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ViewStateActions } from '../actions/view-state.actions';

@State<Set<any>>({
    name: 'viewStates',
    defaults: new Set()
})
@Injectable()
export class ViewStateState {
    @Action(ViewStateActions.Add)
    public addViwState(ctx: StateContext<any>) {}
}
