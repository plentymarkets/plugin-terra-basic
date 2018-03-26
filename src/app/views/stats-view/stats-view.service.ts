import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';


@Injectable()
export class StatsDataService extends TerraBaseService
{
    public bearer:string;
    private _basePathUrl:string;
    constructor(private _loadingSpinnerService:TerraLoadingSpinnerService,
                private _http:Http)
    {
        super(_loadingSpinnerService, _http, '/rest/');
        if(process.env.ENV !== 'production')
        {
            // tslint:disable-next-line:max-line-length
            this.bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU5NzM5N2UzN2Q3OWRhYTYzZTA0MzI4MTNkOTRlNDQ2ZjQxMDliMzNjZDY4YmI0N2ExZWIxODYwMzAwMTA2OTMzNzI3NGY3ZmY4NzBlMDNhIn0.eyJhdWQiOiIxIiwianRpIjoiZTk3Mzk3ZTM3ZDc5ZGFhNjNlMDQzMjgxM2Q5NGU0NDZmNDEwOWIzM2NkNjhiYjQ3YTFlYjE4NjAzMDAxMDY5MzM3Mjc0ZjdmZjg3MGUwM2EiLCJpYXQiOjE1MjExMTY1NDgsIm5iZiI6MTUyMTExNjU0OCwiZXhwIjoxNTIxMjAyOTQ4LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.q56KG5HT0fMuV4rokCGFS39SyuBlTq3CvgE2N597Az1LJvKbtQ0rA4cLwgPzvAMJB6k4ZHPe2TmyQHT7lTNZj09RMgyeQSHv3p-50QogMHjabV_p0326pGAiliEIqdrwKFIWm1v6VjwL1taEib4fZUpQCqNuoDCD_TRWyKNA8TO04ELkNi8NwuxCccVnEna2YamH5brydue0XMY5lHDu8z1YHJQUlOnEUlhpiM5vQJKhsQ-8p56ILCaC6TxqpNefyi5zfT0_mEwXogxY8cOwzOrkWuRT9bG4q4Ih01W69t0rCZ-5EYNNA0u6mdeb4dHwweoE5iCtAO2KLvOD7tidPHceOYLTA17S-9g-lccZkAFkmpdHiF86RxdEzjqkjSKJvlYHMtwhAuaU6y9_rnRbAZqyaLMw_WtzyPMgG8n-wL7KO7_VmYgUNhugYxaKaHvOnHUFzPYBqP-bMMqeS2D5kWkg9JzKcWeA7wX_2LFkN-TVv0XimwIlAmnPkYvWkYcCSX42mNWdmn82pwQUqCYO_ID5wdCNPUi6JpCzQBXaGblyVQCZjGTV-LautYoVpQ66UdOTtD-XMjJzB9lukZc2dOff054YPrGEeIKw9xCyZQrcSfSOrEg1v0rGoNZP7QmB1-3Tgec6QzcL4yxYSe3bVNEyjAayGP1yqyHQV_mBbHM';
            this._basePathUrl = 'http://master.login.plentymarkets.com';
            this.url = this._basePathUrl + this.url;
        }
        this.setHeader();
    }

    public getRestCallData(restRoute:string):Observable<Array <any>>
    {
        this.setAuthorization();
        let url:string;
        url = this._basePathUrl + restRoute;

        return this.mapRequest(
            this.http.get(url, {
                headers: this.headers,
                body:    ''
            })
        );
    }

    private setHeader():void
    {
        if(this.bearer !== null && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
