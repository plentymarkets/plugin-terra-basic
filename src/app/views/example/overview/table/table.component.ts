import {
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    TerraButtonInterface,
    TerraFilter
} from '@plentymarkets/terra-components';
import {
    Language,
    TranslationService
} from 'angular-l10n';
import { ContactsDataSource } from './contacts-data-source';
import { ContactService } from '../../../../services/contact.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ContactInterface } from '../../../../interfaces/contact.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector:    'ptb-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit
{
    @Language()
    public lang:string;

    @Input()
    public filter:TerraFilter<any>;


    @ViewChild(MatPaginator, {static: true})
    public paginator:MatPaginator;

    @ViewChild(MatSort, {static: true})
    public sort:MatSort;

    public _columnList:Array<string> = ['select',
                                        'id',
                                        'firstName',
                                        'lastName', 'email', 'fullName', 'gender', 'lastOrderAt'];
    /**
     * @param _multiple defines if multiple selections are possible or not
     * @param initiallySelectedValues is an array of ContactInterfaces, which are preselected
     */
    public _selection:SelectionModel<ContactInterface> = new SelectionModel<ContactInterface>(true, []);

    public _dataSource:ContactsDataSource = new ContactsDataSource(this._contactService);

    public _noResultButtons:Array<TerraButtonInterface>;

    constructor(private translation:TranslationService,
                private _contactService:ContactService)
    {
    }

    public ngOnInit():void
    {
        this._noResultButtons = [{
            caption:       this.translation.translate('search'),
            isHighlighted: true,
            icon:          'icon-search',
            clickFunction: ():void => this._onSearchBtnClicked()
        }];

        this._dataSource.filter = this.filter;
        this._dataSource.paginator = this.paginator;
        this._dataSource.sort = this.sort;
    }

    public _onSearchBtnClicked():void
    {
        this._dataSource.search();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    public _isAllSelected():boolean
    {
        const numSelected:number = this._selection.selected.length;
        const numRows:number = this._dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    public _masterToggle():void
    {
        this._isAllSelected() ?
            this._selection.clear() :
            this._dataSource.data.forEach((contact:ContactInterface) => this._selection.select(contact));
    }
}
