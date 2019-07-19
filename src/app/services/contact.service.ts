import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInterface } from '../interfaces/contact.interface';
import { Observable } from 'rxjs/internal/Observable';
import { TerraPagerInterface } from '@plentymarkets/terra-components';

@Injectable()
export class ContactService
{
    constructor(private http:HttpClient)
    {
    }

    public getContacts():Observable<TerraPagerInterface<ContactInterface>>
    {
        const url:string = 'http://master.login.plentymarkets.com/rest/accounts/contacts';

        return this.http.get<TerraPagerInterface<ContactInterface>>(url);
    }
}
