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
            this.bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE4MGE0YWM1NzI4MzE5MWUwNjE5NDllN2E4NDRmZjUxNGM5ZmRlZDg5ZDFiM2I3YTg2OWEyZmM4ODJmM2NjMjIxMTJmNTMwOWEzN2NlNTMzIn0.eyJhdWQiOiIxIiwianRpIjoiYTgwYTRhYzU3MjgzMTkxZTA2MTk0OWU3YTg0NGZmNTE0YzlmZGVkODlkMWIzYjdhODY5YTJmYzg4MmYzY2MyMjExMmY1MzA5YTM3Y2U1MzMiLCJpYXQiOjE1MjIwNzM3NDIsIm5iZiI6MTUyMjA3Mzc0MiwiZXhwIjoxNTIyMTYwMTQxLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.eKFYHkaHHuOgWdvlVbqWiJO4Pi6YHDjSlOfUzU9xMJRQWvdfUKMGZwpWt4F098vXd6MvWLnvL9i_CAOVpciNFDN9hn8x_UjAu0_XgAaWu2Mbvrby5XxXaWZ3UvOa8co9mLPKfIMi5UQLCsVzsUmjl5_pFY5zH_Pajj2lpfFAmQExX5jMomWDtRN1zLZ_Hb7GzjxlrK3RskaHXwtrq-sa1i4BssqKVtsvH1YLFrWR01DRXkUIBHftfPJTZ75HXDKMJ8wc3XUyMgeHQe5J12Affhda75_X__iaX2xYfnBiDc0NkRFv7XfHUCDLmH2GUrF23q5UQ25vBitMebMQGIPFsWIaq-d2R_1nduoECc5SDOu_Lwtus36FD7wBh3Ojj81ZbPGoDp0gCa6bjXOCwX-JZ3NEhRJ9ixaX0WmbrGlT6QmQa0fW53HWRHAtHlUz4Js7jkKl8o-jjQ9yImal-MUpKn-Tq-IFqoTmSjYExThJLgTrunoFK6_pRfGrdvD8ONCtwJfnEmgOR9MtizN2y-2BFnizD5PozoqXx8_zKsuqiq5WAbZvv43AsyHXu7MkaNlZsEanoMt6_kKrwKEsLF5l5SI0jwUGfl83fYEO9Mt7TG2uLWGqPilM_V-0tMEx3CyVoAh3y6Gpots4_IeKG43uOPno2eZv4oLIVYWsuK0zuFo';
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
