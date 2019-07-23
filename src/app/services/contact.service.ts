import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInterface } from '../interfaces/contact.interface';
import { Observable } from 'rxjs/internal/Observable';
import { TerraPagerInterface } from '@plentymarkets/terra-components';

@Injectable()
export class ContactService
{
    private readonly url:string = 'http://master.login.plentymarkets.com/rest/accounts/contacts';
    constructor(private http:HttpClient)
    {
    }

    public getContacts():Observable<TerraPagerInterface<ContactInterface>>
    {
        return this.http.get<TerraPagerInterface<ContactInterface>>(this.url);
    }

    public getContactById(contactId:number):Observable<ContactInterface>
    {
        return this.http.get<ContactInterface>(this.url + '/' + contactId);
    }
}
