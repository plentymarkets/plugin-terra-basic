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
            this.bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFiODIwYjYwODhmODk5MThiZTFlOTMzZmNiYzhjZWY4MzllNmQ3ZWZmZGFhMjBkNzE4MTVjOTIwYzI2NDRlZjE2OGMzZDZmMGE2ZWI3MGMyIn0.eyJhdWQiOiIxIiwianRpIjoiMWI4MjBiNjA4OGY4OTkxOGJlMWU5MzNmY2JjOGNlZjgzOWU2ZDdlZmZkYWEyMGQ3MTgxNWM5MjBjMjY0NGVmMTY4YzNkNmYwYTZlYjcwYzIiLCJpYXQiOjE1MjA1ODkxOTYsIm5iZiI6MTUyMDU4OTE5NiwiZXhwIjoxNTIwNjc1NTk1LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.koEt9rE9hR_IHwT-7nn64dJ09RTC7FKlyDG4bZeUSF4bhu8vu9ygM6TNaMLasxx4g2YS2_jV0ODgvlxAzOmEHEUKZ94o-GaN8nYkkIEidarOc-BlLJZ3cqQGrSN35M99R3XCZgUzCItAguiLK_sK38meXW06W3hp8TW9lxGNVx7pug8_Y5dQsKldwbT6XdPBlxYrWrNGpTEYDDrBf3IAqlzmzTHw_JW2NHyZPS-53Cum4UpxEy6re4qydmpPKQF5K7J-0p5e4G8HywunCZ1B-PVvcrgP7TzFPP4IY0teyNE1A19BbvTEy2G5GnKuoTee7OAwNia_23AQUryj9iME1J2yFxtyfvRPAjaeMlK7qd3Dqu-0cShPTRf6bpf_io9XIsHKBQS9bi5QXKLn5g-WO1ImG2dbpydCMRj4FSEVW5k_d9cWJHaxT-t6fHwx_g1CVbP3JXdP2vzJ4bOKze3jT8Zdd7v8Su4hvF4c7OiidX-g1_FuIB1v9OaiBK6PoasRfPMEmGVJFwanJR73D2YhpgtSA-dGa7Zrxu9vHaA7eicJwYeSyycSp6OaFmsB6ViQ3pbVkarxTQwF_2I4cNpMMkBdnWGKcHR4FaK86KtExX_Jx3XHinovZ0L1ZKSOrmVYNcQe01R9guFn-GK-XE1bphcJH6tHtNJJY0DGpkgmQ6A';
            this._basePathUrl = 'http://master.login.plentymarkets.com';
            this.url = this._basePathUrl + this.url;
        }
        this.setHeader();
    }

    public getRestCallData(restRoute:string):Observable<Array<any>>
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
