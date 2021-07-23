import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { TerraButtonInterface, TerraFilter } from '@plentymarkets/terra-components';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';
import { ContactsDataSource } from './contacts-data-source';
import { ContactService } from '../../../../services/contact.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ContactInterface } from '../../../../interfaces/contact.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ColumnInterface } from '@plentymarkets/terra-components/components/table/table-settings/interface/column.interface';

@Component({
    selector: 'ptb-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    public lang: string;

    @Input()
    public set filter(filter: TerraFilter<any>) {
        this._dataSource.filter = filter;
    }

    @ViewChild(MatPaginator, { static: true })
    public set paginator(paginator: MatPaginator) {
        this._dataSource.paginator = paginator;
    }

    @ViewChild(MatSort, { static: true })
    public set sort(sort: MatSort) {
        this._dataSource.sort = sort;
    }

    public _columns: Array<ColumnInterface> = [
        {
            key: 'select',
            label: 'Auswahl'
        },
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'firstName',
            label: 'Vorname'
        },
        {
            key: 'lastName',
            label: 'Nachname'
        }
    ];

    public _columnList: Array<string> = ['select', 'firstName', 'lastName'];
    /**
     * @param _multiple defines if multiple selections are possible or not
     * @param initiallySelectedValues is an array of ContactInterfaces, which are preselected
     */
    public _selection: SelectionModel<ContactInterface> = new SelectionModel<ContactInterface>(true, []);

    public _dataSource: ContactsDataSource = new ContactsDataSource(this._contactService);

    public _noResultButtons: Array<TerraButtonInterface> = [];

    constructor(
        @Inject(L10N_LOCALE) locale: L10nLocale,
        private translation: L10nTranslationService,
        private _contactService: ContactService
    ) {
        this.lang = locale.language;
    }

    public ngOnInit(): void {
        this._noResultButtons = [
            {
                caption: this.translation.translate('search'),
                isHighlighted: true,
                icon: 'icon-search',
                clickFunction: (): void => this._onSearchBtnClicked()
            }
        ];
    }

    public _onSearchBtnClicked(): void {
        this._dataSource.search();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    public _isAllSelected(): boolean {
        const numSelected: number = this._selection.selected.length;
        const numRows: number = this._dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    public _masterToggle(): void {
        this._isAllSelected()
            ? this._selection.clear()
            : this._dataSource.data.forEach((contact: ContactInterface) => this._selection.select(contact));
    }

    public _doSomething(text: string): void {
        console.log(`Group function executed with text "${text ? text : ''}"`);
    }
}
