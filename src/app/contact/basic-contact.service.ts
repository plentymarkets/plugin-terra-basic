import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInterface } from './contact.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BasicContactService
{
    private readonly url:string = 'http://master.login.plentymarkets.com/rest/accounts/contacts';
    constructor(private http:HttpClient)
    {
    }

    public getContactById(contactId:number):Observable<ContactInterface>
    {
        return this.http.get<ContactInterface>(this.url + '/' + contactId);
    }
}
