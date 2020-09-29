import {
    RequestParameterInterface,
    TablePagingSortingDataSource,
    TerraPagerInterface
} from '@plentymarkets/terra-components';
import { ContactInterface } from '../../../../interfaces/contact.interface';
import { Observable } from 'rxjs';
import { ContactService } from '../../../../services/contact.service';

export class ContactsDataSource extends TablePagingSortingDataSource<ContactInterface> {
    constructor(private contactService: ContactService) {
        super();
    }

    public request(requestParams: RequestParameterInterface): Observable<TerraPagerInterface<ContactInterface>> {
        return this.contactService.getContacts(requestParams);
    }
}
