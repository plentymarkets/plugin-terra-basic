import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TerraKeyValueInterface } from '@plentymarkets/terra-components';
import { ViewStateActions } from '../actions/view-state.actions';

@State<TerraKeyValueInterface<any>>({
    name: 'viewStates',
    defaults: {}
})
@Injectable()
export class ViewStateState {
    @Action(ViewStateActions.Add)
    public addViwState(ctx: StateContext<any>, { viewKey, viewState }) {
        const currentState: Set<any> = ctx.getState();
        ctx.patchState({ [viewKey]: viewState });
    }

    @Action([ViewStateActions.Update, ViewStateActions.UpdateFilter])
    public updateViewState(ctx: StateContext<any>, { viewKey, viewState }) {
        const currentState: Set<any> = ctx.getState();
        ctx.patchState({ [viewKey]: { ...currentState[viewKey], ...viewState } });
    }
}
