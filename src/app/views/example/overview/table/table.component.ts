import {
    Component,
    OnInit
} from '@angular/core';
import { TerraButtonInterface } from '@plentymarkets/terra-components';
import { TranslationService } from 'angular-l10n';
import { Language } from 'angular-l10n';

@Component({
    selector: 'table',
    template: require('./table.component.html')
})
export class TableComponent implements OnInit
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
