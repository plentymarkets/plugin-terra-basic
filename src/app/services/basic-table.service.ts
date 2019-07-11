import {
    EventEmitter,
    Injectable
} from '@angular/core';
import {
    TerraDataTableBaseService,
    TerraDataTableCellInterface,
    TerraDataTableRowInterface,
    TerraPagerInterface,
    TerraPagerParameterInterface
} from '@plentymarkets/terra-components';
import { ContactInterface } from '../interfaces/contact.interface';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class BasicTableService
    extends TerraDataTableBaseService<ContactInterface, TerraPagerParameterInterface>
{
    public dataLoaded:EventEmitter<TerraPagerInterface<ContactInterface>> = new EventEmitter<TerraPagerInterface<ContactInterface>>();

    constructor(private contactService:ContactService)
    {
        super();
    }

    public requestTableData():Observable<TerraPagerInterface<ContactInterface>>
    {
        return this.contactService.getContacts();
    }

    public dataToRowMapping(rowData:ContactInterface):TerraDataTableRowInterface<ContactInterface>
    {
        let cellList:Array<TerraDataTableCellInterface> = [
            {
                data: rowData.id
            },
            {
                data: rowData.firstName
            },
            {
                data: rowData.lastName
            }
        ];

        return {
            cellList:      cellList,
            data:          rowData,
            clickFunction: ():void => alert(`Row with id ${rowData.id} clicked`)
        };
    }
}
