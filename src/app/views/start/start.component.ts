import { Component, Inject, Input } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

@Component({
    selector: 'ptb-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    public lang: string;

    @Input()
    public myTitle: string;

    public redirectToDevelopersTutorial(): void {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }

    constructor(@Inject(L10N_LOCALE) locale: L10nLocale) {
        this.lang = locale.language;
    }
}
