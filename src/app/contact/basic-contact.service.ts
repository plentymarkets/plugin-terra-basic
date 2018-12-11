import { Injectable } from '@angular/core';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
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
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmYjIxYTFmNGVjZTM3MzgzYjFlNzFiM2U3Y2M4YzhiNmJhNDg5MDI5ZWQyMzIyMTFhNTUxZWVhNzNiYjc1OWQ0N2I3N2Y2ZTBmN2M2Yjk1In0.eyJhdWQiOiIxIiwianRpIjoiZGZiMjFhMWY0ZWNlMzczODNiMWU3MWIzZTdjYzhjOGI2YmE0ODkwMjllZDIzMjIxMWE1NTFlZWE3M2JiNzU5ZDQ3Yjc3ZjZlMGY3YzZiOTUiLCJpYXQiOjE1NDQ1MDI3NDMsIm5iZiI6MTU0NDUwMjc0MywiZXhwIjoxNTQ0NTg5MTQzLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.nNuSfNLHIbPJPk9zRmjOM35XsJ4afX3a0VVImWmyEcbelKbmQ6xX4zMO3vtQLVeCioUBXvIKPw_3fvs4CzOn4_6esxBu4zD8uAzcTKYKH4zQGX8YV7BT2eDpDV29KDrnK37uIg4OQ7Kyas8jaGn8kvVB1l2tzcRJ7bQdT6dc3xl5Sb22VQ2S5FkkrLptgMJkdPmeVmXzCVxJop5skoRQ3ZNqbNQheyyH5-R6SqKjRFd5m4LLHLSVUJRphVl36nMtBOfSpUH3g4hgSbjU0qsscSC4BrbvegjFBwIomQpZFm8ApBWpyfQ5XuL65n0Wz6AYvT1p6BdZWGzPXwT9LMzQX7sj37gqieFM_HGU3xs3DU5Izb62PeuoL8eWn184rJXm2TTGbeEilHt88nD9g9JPQLPMa9ntXV47OXpQ83EeQpb9Dqh9xPEuZAzSLV2dlPX-RIx7OwjvDb6maom17ZzLBPP8Zybdp0SPzxmFE_ONyaNluIs--4E5YdlQftrvEHUHyUJmfKagQneeYHcD-znPH_EaVy9V-C-aObXUZysguW7HyxqFvgO062EaN7OwE_wkpTmb3tAFHfthlz3GY4NZGNXEJIInDNTTne0IIQoVrPxutPPkMBnvAcumGy4ezqY383xjIbJIv3s55ueKmqnaZ8-E-sMc0UfGXMAOV6H_6k8';
    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getContactById(contactId:number):Observable<ContactInterface>
    {
        this.setHeader();

        return this.mapRequest(this.http.get(
            this.url + '/' + contactId,
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
