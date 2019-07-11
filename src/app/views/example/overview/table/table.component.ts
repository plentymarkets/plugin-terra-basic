import {
    Component,
    OnInit
} from '@angular/core';
import {
    TerraButtonInterface,
    TerraDataTableHeaderCellInterface,
    TerraTextAlignEnum
} from '@plentymarkets/terra-components';
import { TranslationService } from 'angular-l10n';
import { Language } from 'angular-l10n';
import { BasicTableService } from '../../../../services/basic-table.service';

@Component({
    selector:    'ptb-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit
{
    @Language()
    public lang:string;

    protected readonly headerList:Array<TerraDataTableHeaderCellInterface>;
    protected noResultButtons:Array<TerraButtonInterface>;

    constructor(private translation:TranslationService,
                protected tableService:BasicTableService)
    {
        this.headerList = this.createHeaderList();
    }

    public ngOnInit():void
    {
        this.noResultButtons = [{
            caption:       this.translation.translate('search'),
            isHighlighted: true,
            icon:          'icon-search',
            clickFunction: ():void => this.onSearchBtnClicked()
        }];
    }

    public onSearchBtnClicked():void
    {
        this.tableService.getResults(true);
    }

    private createHeaderList():Array<TerraDataTableHeaderCellInterface>
    {
        return [
            {
                caption: 'ID',
                width:   20
            },
            {
                caption:   'firstName',
                width:     20,
                textAlign: TerraTextAlignEnum.LEFT
            },
            {
                caption: 'lastName',
                width:   20
            }
        ];
    }
}
