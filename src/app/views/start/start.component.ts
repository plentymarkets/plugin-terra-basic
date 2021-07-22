import { Component, Inject, Input } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

@Component({
    selector: 'ptb-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    public lang: string;

    public tooltipKey: string = 'startHere';

    constructor(@Inject(L10N_LOCALE) locale: L10nLocale) {
        this.lang = locale.language;
    }

    public redirectToDevelopersTutorial(): void {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }
}
