import {
    Component,
    OnInit
} from '@angular/core';
import {
    Language,
    TranslationService
} from 'angular-l10n';
import { TerraNodeTreeConfig } from '@plentymarkets/terra-components';
import { Router } from '@angular/router';

@Component({
    selector:    'ptb-main-menu',
    templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit
{
    @Language()
    public lang:string;

    constructor(public _treeConfig:TerraNodeTreeConfig<{}>,
                private router:Router,
                private translation:TranslationService)
    {
    }

    public ngOnInit():void
    {
        this._treeConfig.addNode({
            id:        'start',
            name:      this.translation.translate('start'),
            isVisible: true,
            isActive:  this.router.isActive('plugin/start', true),
            onClick:   ():void =>
                       {
                           this.router.navigateByUrl('plugin/start');
                       }
        });

        this._treeConfig.addNode({
            id:        'example',
            name:      this.translation.translate('example'),
            isVisible: true,
            isActive:  this.router.isActive('plugin/example', true),
            onClick:   ():void =>
                       {
                           this.router.navigateByUrl('plugin/example');
                       }
        });

        this._treeConfig.addNode({
            id:        'split-view',
            name:      'Split view',
            isVisible: true,
            isActive:  this.router.isActive('plugin/split-view', true),
            onClick:   ():void =>
                       {
                           this.router.navigateByUrl('plugin/split-view');
                       }
        });
    }
}
