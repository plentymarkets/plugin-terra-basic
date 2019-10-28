import {
    Component,
    OnInit
} from '@angular/core';
import {
    TerraButtonInterface,
    TerraDataTableHeaderCellInterface,
    TerraTextAlignEnum
} from '@plentymarkets/terra-components';
import {
    Language,
    TranslationService
} from 'angular-l10n';
import { BasicTableService } from '../../../../services/basic-table.service';

@Component({
    selector:    'ptb-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit
{
    @Language()
    public lang:string;

    public readonly _headerList:Array<TerraDataTableHeaderCellInterface>;
    public _noResultButtons:Array<TerraButtonInterface>;

    constructor(private translation:TranslationService,
                public _tableService:BasicTableService)
    {
        this._headerList = this.createHeaderList();
    }

    public ngOnInit():void
    {
        this._noResultButtons = [{
            caption:       this.translation.translate('search'),
            isHighlighted: true,
            icon:          'icon-search',
            clickFunction: ():void => this._onSearchBtnClicked()
        }];
    }

    public _onSearchBtnClicked():void
    {
        this._tableService.getResults(true);
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
