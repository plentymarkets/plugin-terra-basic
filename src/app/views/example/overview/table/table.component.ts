import {
    Component,
    OnInit
} from '@angular/core';
import { TerraButtonInterface } from '@plentymarkets/terra-components';

@Component({
    selector: 'table',
    template: require('./table.component.html')
})
export class TableComponent implements OnInit
{
    protected noResultButtons:Array<TerraButtonInterface>;

    public ngOnInit():void
    {
        this.noResultButtons = [];

        this.noResultButtons.push({
            caption:       'Search',
            isPrimary:     true,
            icon:          'icon-search',
            clickFunction: ():void =>
                           {
                               alert('Search clicked');
                           }
        });
    }
}
