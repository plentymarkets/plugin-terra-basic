import { TerraBaseService,
    TerraLoadingSpinnerService } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BasicContactInterface } from './basic-contact.interface';

@Injectable()
export class BasicContactService extends TerraBaseService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjljYjBjYmY0YjYzOTA4Mjk4MWE4ZWY0Mjg0MjRiN2FkZDRkZjliNTc4NTU2NmQ5MWJjMzk4ZjQzMmI5NjQ0NjQwYmU4MjYxOTMxNzZkMWRjIn0.eyJhdWQiOiIxIiwianRpIjoiOWNiMGNiZjRiNjM5MDgyOTgxYThlZjQyODQyNGI3YWRkNGRmOWI1Nzg1NTY2ZDkxYmMzOThmNDMyYjk2NDQ2NDBiZTgyNjE5MzE3NmQxZGMiLCJpYXQiOjE1NTY2MTkyNjgsIm5iZiI6MTU1NjYxOTI2OCwiZXhwIjoxNTU2NzA1NjY4LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.AX0eyxRrezq8f8z9BdFvK5ZRRc6hupJsD7-Shm_AWY0ZZSXAV1mi5iS9Solrk-XaGLmtDvGc30Plk3WQYwqeE2BYutLUEIlm2kxZumShR1fM4GaRu2Y_d5qcDG2J1Av7-T4BOXznAwp0VFJaAFjJOBGom7_47goW0Bw1SNM6MhrrqKRdTqCLhM54IB5JBt-w-ExyKrDGJedWAvD8ulFvUZLYFrsT-95H9bZ-td7q9wGaDv9dE7x06iMZcR-dMw9Ma0IlzjDc3w45pQdzQgMKkK9G3y_P2Iy-sNdt0216V7YZ4QvW95R-zLILIoeqaZrXtSirr2Waa_0HrMpCnR5mTK13WqvyR7wYHBilOYeuMIPDCXucizLpQGylpv2XqZGbf6gZjATxZbcv4UquvsqJC4opvhBP6fFglgD7BN6pg1NvyDZ91bxrHJIN0no1Su89rhF35_0R16it3KxO2IOJF8XwQd6MzPfZ40Kxl3KO9CMmbHZTrcW0LoQNdvr_WehksoZNUt_05vnkxyEdVeHElV2g4d-ITf63j4yQY2RhXv76GyrYYcS5UPmTE2aEmtk2g1nyxa_OwhJ3lJNGsW3uV09-va-kkhT9g9PHUfi9EEIz5jqIB8n0_rflNSrTBoMUJBwFmBZgchrrv9qvDV21aBryhhUqoWE7GBYfBeVCJDo';

    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getSingleContact(id:number):Observable<BasicContactInterface>
    {
        this.setHeader();

        return this.mapRequest(this.http.get(this.url + '/' + id, {
            headers: this.headers,
            body: ''
        }));
    }

    private setHeader():void
    {
        this.setToHeader('Authorization', 'Bearer ' + this.bearer)
    }
}