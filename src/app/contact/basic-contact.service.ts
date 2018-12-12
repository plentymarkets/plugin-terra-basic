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
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzNzI4MmQ3ODcyZjBiODJiYWVkZTFiNjk4YzA1OWUyNTM3M2EwYzJiYmRmOWM0NWY3NWJmOTQ3MWYwM2FkNzgxNWNmZWM0NmQ5ZTQ2YmRkIn0.eyJhdWQiOiIxIiwianRpIjoiNTM3MjgyZDc4NzJmMGI4MmJhZWRlMWI2OThjMDU5ZTI1MzczYTBjMmJiZGY5YzQ1Zjc1YmY5NDcxZjAzYWQ3ODE1Y2ZlYzQ2ZDllNDZiZGQiLCJpYXQiOjE1NDQ2MjQ4NDUsIm5iZiI6MTU0NDYyNDg0NSwiZXhwIjoxNTQ0NzExMjQ1LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.qHHMkHUaxKDlrpSnLVK_c1I2_PkE49IJbzrPv9KmxPybWgNqzqyrPf-HMaP0a3PzM6eBIzNz6H4VRaWpM3BxJTXc0UvFeY8Fvp9snw4IZWSzHrclSnD5xTFdMziuEUZ9DRMNXu0CrPBzYSrFv-eg0WUzziqGyHm3utsWioH0dEQtp9dHlYz0l2Ngwj8MD91XnjsG7W6T1KmwjtHWu6I07lcakfSMFboY_GNRwV5nlmF6EJZbYqkSbfAXTT3FHFwmTJOqXTze3Xydi5j14tytvVvlHKbTpCPTfRoQgWKXOOmjVcBJQ14ftvmbgpMOnXZvJ8OQUBlqrBhjBKZCaRZoM_Pi_KXxPGYOJA78hLzldKwnvckDXNM3ePRdlbh5Rl5OyG2qs6iKtoKzypMlOwl5WhtzympsNnXApMAuCrmoh7a2Lcbxii8h2X8CmLbrvkq62hj4yrOEeC-t0xLhZN5oioE4RQiRJ-whpzHatC6jagOh_0Dt3Po2Cmr14Fv0iKuu52ZKNoODWNfPxKVIOIPk0pP046Rh6jCAxfP93yFUvuB69lrHWFeFJo6jn12Jv7tkz3rO9qQGhpkXmMsy5HUVjE1BOrgp4hyqsN3_ucS9A8g-bmn3S2TIi42QJrc_Jc-iDJzR7sKpglAQcQxADLlTi6_BEDMFFsLAX4vSUUAEL90';
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
