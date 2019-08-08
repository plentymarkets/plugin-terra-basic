import { TerraBaseService,
    TerraLoadingSpinnerService } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BasicContactInterface } from './basic-contact.interface';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { TerraPagerInterface } from '../../../node_modules/@plentymarkets/terra-components';

@Injectable()
export class BasicContactService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFkYzI0YTdmYzNiMDNjZGYyOWNjNmVkNmFkYjM5ZTNlNTZjZGMzYmZmYmFiNDg0YTE2ZmRmZjY5ZDMzZDE5YWQ5NzllOTNmYTdlN2MzOWM1In0';

    constructor(private http:HttpClient)
    {
    }

    public getSingleContact(id:number):Observable<BasicContactInterface>
    {
        // this.setHeader();
        //
        // return this.mapRequest(this.http.get(this.url + '/' + id, {
        //     headers: this.headers,
        //     body: ''
        // }));

        localStorage.setItem('accessToken', this.bearer)

        const url:string = 'http://master.login.plentymarkets.com/rest/accounts/contacts/77';


        return this.http.get<BasicContactInterface>(url);
    }
}
