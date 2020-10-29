import { RequestParameterInterface, TerraPagerInterface, TerraTableDataSource } from '@plentymarkets/terra-components';
import { ContactInterface } from '../../../../interfaces/contact.interface';
import { Observable } from 'rxjs';
import { ContactService } from '../../../../services/contact.service';

export class ContactsDataSource extends TerraTableDataSource<ContactInterface> {
    constructor(private contactService: ContactService) {
        super();
    }

    public request(requestParams: RequestParameterInterface): Observable<TerraPagerInterface<ContactInterface>> {
        return this.contactService.getContacts(requestParams);
    }
}
