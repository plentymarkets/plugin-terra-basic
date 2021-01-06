import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TerraFilter } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs';
import { ExampleComponentStateActions } from 'src/app/core/ngxs/actions/example-component.actions';
import { ExampleComponentState } from 'src/app/core/ngxs/state/example-component.state';

@Component({
    selector: 'ptb-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
    /**
     * Select the filter from the state
     */
    @Select(ExampleComponentState.filter)
    public filter$: Observable<any>;

    public filter: TerraFilter<any> = new TerraFilter<any>();

    constructor(private _store: Store) {}

    public ngOnInit() {
        this.filter$.subscribe((filter) => (this.filter.filterParameter = filter));

        /** Update the filter state after new search. */
        this.filter.search$.subscribe(() => {
            this._store.dispatch(
                new ExampleComponentStateActions.UpdateFilter({ filter: { ...this.filter.filterParameter } })
            );
        });
    }
}
