import { TerraBaseService,
    TerraLoadingSpinnerService } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BasicContactService extends TerraBaseService
{
    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getContacts():Observable<any>
    {
        return this.http.get(this.url, {
            headers: this.headers
        })
    }
}