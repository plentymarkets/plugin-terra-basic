import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { StartComponentStateActions } from '../actions/start-component.actions';

@State<any>({
    name: 'startComponent',
    defaults: {
        lang: '',
        myTitle: ''
    }
})
@Injectable()
export class StartComponentState {
    @Action(StartComponentStateActions.Add)
    public addViewState(ctx: StateContext<any>, { viewState }) {
        const currentState: Set<any> = ctx.getState();
        ctx.setState({ ...currentState, ...viewState });
    }
}
