import {
    Component,
    OnInit
} from '@angular/core';
import { TerraButtonInterface } from '@plentymarkets/terra-components';
import { TranslationService } from 'angular-l10n';
import { Language } from 'angular-l10n';

@Component({
    selector:    'table',
    templateUrl: './ptb-table.component.html'
})
export class PtbTableComponent implements OnInit
{
    @Language()
    public lang:string;

    protected noResultButtons:Array<TerraButtonInterface>;

    constructor(private translation:TranslationService)
    {
    }

    public ngOnInit():void
    {
        this.noResultButtons = [];

        this.noResultButtons.push({
            caption:       this.translation.translate('search'),
            icon:          'icon-search',
            clickFunction: ():void =>
                           {
                               alert('Search clicked');
                           }
        });
    }
}
