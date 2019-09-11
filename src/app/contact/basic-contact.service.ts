import { Injectable } from '@angular/core';
import {
    TerraBaseService,
    TerraLoadingSpinnerService,
    TerraPagerInterface
} from '@plentymarkets/terra-components';
import {
    Http,
    Response
} from '@angular/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ContactInterface } from './contact.interface';

@Injectable()
export class BasicContactService extends TerraBaseService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5Yjc0ZjIzZDViMjdmZjk1OGM3OGI1NzQzMGUxMThkNzYzYTRiMTk0NTg3ZDdiYzliYjYyY2QxZmNhMWZkYmRkNDE3NDYxZjkyY2JhYzY1In0.eyJhdWQiOiIxIiwianRpIjoiMzliNzRmMjNkNWIyN2ZmOTU4Yzc4YjU3NDMwZTExOGQ3NjNhNGIxOTQ1ODdkN2JjOWJiNjJjZDFmY2ExZmRiZGQ0MTc0NjFmOTJjYmFjNjUiLCJpYXQiOjE1NjgxODU4ODEsIm5iZiI6MTU2ODE4NTg4MSwiZXhwIjoxNTY4MjcyMjgxLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.eBoT6QJdCx-Ys9x72butUoO1yCSKrWNVckfgUwtKN1aU9DjWtIxbOIc5K_59cR8GIzu-LMc1LV524KFXA-g73VpBjqBPcuYESuEvxvFhbJF3yBMy4MDkNa6XKP_qIuypp31pnaX3L0U3LYpEeTmUU9gS4ysv0v9wQQi7ER8gRSfYo4hOClzsTj9HEPq_pPMg9OZG6zhnGqbApNLys_z_eBKK-6-DO7ItyxKUKDjpqzrqDcleOo2vhiwZkcbywCJ6Il-l91H_VxaHv0AGrl1XPFqfEEO-xu3ab45EWLBfJonqXURV_r6coih66c7MxgZjr19609SuPvuXpB13tWc3T7rCFBWzjbQmfBzxCUemPu7S32zFlKXfGyi8IwbzveHX6rH66sHfaka_9KixuvpGm6ucjsmu9P9W2UOza2LF-lnsvz-XjxddvGaq1UiFs7Emu80C-Cjr-HkKeumj2X1ZSfY_2TTdOtj3yV2nWQOYgpG-qZdJjrmI4nUY180hKmd_a4tEw-7l14jLf1-JG-qYsyAUxXsBlR1N-EtjR-Kuxz2GXRHGY7TU0bvLvMKYXIxjag19SGLmok6N5IB_BNuJlHLcF0C_wDKg0kFgLky6s3QFUBy6P1llnZd5wcoGh6OOADXgGNuSCbf9W8qR2GWq1qBroZgwayv3hThna7z6pgk';

    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getContactById():Observable<TerraPagerInterface<ContactInterface>>
    {
        this.setHeader();

        return this.mapRequest(this.http.get(
            this.url + '/',
            {
                headers: this.headers,
                body:    ''
            }
        ));
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }

}
