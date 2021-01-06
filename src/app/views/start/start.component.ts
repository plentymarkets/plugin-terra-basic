import { Component, Inject, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';
import { StartComponentStateActions } from 'src/app/core/ngxs/actions/start-component.actions';
import { ViewStateActions } from 'src/app/core/ngxs/actions/view-state.actions';

@Component({
    selector: 'ptb-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    public lang: string;

    @Input()
    public myTitle: string;

    constructor(@Inject(L10N_LOCALE) locale: L10nLocale, public store: Store) {
        this.lang = locale.language;

        this.store.dispatch(new StartComponentStateActions.Add({ lang: this.lang, myTitle: this.myTitle }));
    }

    public redirectToDevelopersTutorial(): void {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }
}
