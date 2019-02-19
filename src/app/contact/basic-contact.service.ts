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
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiOWZmMmI4NGYxNDQ1OGQxN2Y3YjFiMDI5ODRiMjY4NzZhNjQ2NjE4ZjgyZGNlM2ZkZTI0YjIzNTIxODljMDBlZTFmMGM2MmI2ZWZkZDM4In0.eyJhdWQiOiIxIiwianRpIjoiMmI5ZmYyYjg0ZjE0NDU4ZDE3ZjdiMWIwMjk4NGIyNjg3NmE2NDY2MThmODJkY2UzZmRlMjRiMjM1MjE4OWMwMGVlMWYwYzYyYjZlZmRkMzgiLCJpYXQiOjE1NTA1NTk1MDEsIm5iZiI6MTU1MDU1OTUwMSwiZXhwIjoxNTUwNjQ1OTAxLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.Zs85N67M3Y1c-OwyMSKVawdNBDPZh9VKUC7EdIIK-7Uful1iA8_7PuyeYxu1BCfR5yM80HQNXLiodS4-O_i7boPPOwxJwX0z1i5RbMuSpsdSkCN0fL1f00VauxKmPaMlDHSvhAXSUbLXmnlKKzQsAacacxRAkAEIqTOxdWSjXWFMxRFMuFVp-46LIIcZNAKYSLoLSRS8YPrgsVWSrrtthpAVdlm3Vm2Aa58L1vCfmkZdXJvdwNH-khr-HFkZB59Q2uHzx6W0elLqnK6BmYTWRAD_60n9d45dJbnwx49JoIbbSgndFRGwNPr6wJcxoDuSq0oez6pntU54nhkY74YGAQQb3o-cPxQgw8SqCD832EtiWKMyHHIeykz00gKjPSctac9-Rp9J6g-F_LbezigfIQNAW0u_UhaH3jnNcIduC2wEEjkz_h-FUGoC-H5fnEz20ItGjzgvLc1CgEywfEs52s57fT8HDjM-VekC2OyVoTQaTHPE-SDhnzGmg_H1iGG8qwkxx2qW8vaupREYKB15AVsotCkT3eVkDr35jvyIDGVb5bZGolLpBdKWSEGohakNboTepUPR0wa6j25TGU7i290qtoz78UNHoIYW35szrZ9TDR8T1x98evlOOCGLFOotueSnT6J9DdpeZS-oeVaCUr3WcmPlqNCaz5i6XCwnAj0';
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
