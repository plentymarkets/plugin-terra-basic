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
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { empty } from 'rxjs/internal/observable/empty';
import { PlaceHolderService } from '../core/placeholder/place-holder.service';


@Injectable()
export class BasicTableService
    extends TerraDataTableBaseService<ContactInterface, TerraPagerParameterInterface>
{
    public dataLoaded:EventEmitter<TerraPagerInterface<ContactInterface>> = new EventEmitter<TerraPagerInterface<ContactInterface>>();

    constructor(private contactService:PlaceHolderService)
    {
        super();
    }

    public requestTableData():any
    {
        return;
    }

    public dataToRowMapping(rowData:ContactInterface):TerraDataTableRowInterface<ContactInterface>
    {
        const cellList:Array<TerraDataTableCellInterface> = [
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
