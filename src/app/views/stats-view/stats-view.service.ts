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
            this.bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk0OWE2Y2JiODMzZTEwZmYxYzUxZjY5MWZmMGVlZjk5OGY0MWVhYTdhMGIwZmJkMzdlYzYxZDBjNDBlNzE3ODY4MjNmMDI0YzM3NjkyNDkwIn0.eyJhdWQiOiIxIiwianRpIjoiOTQ5YTZjYmI4MzNlMTBmZjFjNTFmNjkxZmYwZWVmOTk4ZjQxZWFhN2EwYjBmYmQzN2VjNjFkMGM0MGU3MTc4NjgyM2YwMjRjMzc2OTI0OTAiLCJpYXQiOjE1MjIxNDYzNzksIm5iZiI6MTUyMjE0NjM3OSwiZXhwIjoxNTIyMjMyNzc4LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.kwMA6j17gWnHqUWN2W20fxR9AJ-STaWkcHee5Nv0s9vRCNghf0CR2oaddtPxtal6rlr36S3aM-790SmHpzVifpH7S9gFbif0Ithl3pYlJIei3Vldomq6A3pYdh9S2_QgI2yyzCaivYlJ2S-Wwech5Ef54zh8I7cm7QdhIkP9nHl5w2KsgWk47UoooO0rzAX2D_tkn16GmjsyIYGIwajg8beT_qUCxsi725cDkXrJUPUKA8t5-bpEzYWC8R9dWVR87vLtR-5MehETy5okH5kk9E3maOcsdQxq-PMtuLVVfvi53GzUVKed0VgDfO3xHJ6M40NpdmOfEv4qs6juASMmx9vMAFIOrWO0c7aE8UeODhX-3cmODP9dZ3xkgwCo_StzuScA66gHYLTF8eVi2V8Of4zZ382j1l8WmUHvXrIj9_e7a-LO6cL45kTu7mGpd8CBdm_oA2akmj6sDSqrt74RFqG1gkVtH4CGYTOhoSNneqkTAuliOpn2DqqsV_AQ1uKXmSVfS0Yhktfc5l8g3PaHRrxkYjWE5ITcc3Zq1E6d9uphe6nOqLNLGYrNHlkcL9P_nguERSGSF-X2zfrur1K9RSHXhL_oJGXzxEAkVrn0q3PBzWdy-axmRdzlPN4M0AlJN9iFKxCyAtglOhVi9hBr2_wQ3mGkD3A6NBh5-oRXBm8';
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
