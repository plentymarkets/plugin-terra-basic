import { Component, Inject, OnInit } from '@angular/core';
import { L10N_LOCALE, L10nLocale, TranslationService } from 'angular-l10n';
import { TerraNodeTreeConfig } from '@plentymarkets/terra-components';
import { Router } from '@angular/router';

@Component({
    selector: 'ptb-main-menu',
    templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
    public lang: L10nLocale;

    constructor(
        @Inject(L10N_LOCALE) locale: L10nLocale,
        public _treeConfig: TerraNodeTreeConfig<{}>,
        private router: Router,
        private translation: TranslationService
    ) {
        this.lang = locale;
    }

    public ngOnInit(): void {
        this._treeConfig.addNode({
            id: 'start',
            name: this.translation.translate('start'),
            isVisible: true,
            isActive: this.router.isActive('plugin/start', true),
            onClick: (): void => {
                this.router.navigateByUrl('plugin/start');
            }
        });

        this._treeConfig.addNode({
            id: 'example',
            name: this.translation.translate('example'),
            isVisible: true,
            isActive: this.router.isActive('plugin/example', true),
            onClick: (): void => {
                this.router.navigateByUrl('plugin/example');
            }
        });
    }
}
