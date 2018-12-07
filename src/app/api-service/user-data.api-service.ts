import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import { UserData } from './user-data';
import { isNullOrUndefined } from 'util';
import { ApiHelper } from '../helper/api.helper';

/**
 * @author mfrank
 */
@Injectable()
export class UserDataService extends TerraBaseService
{
    private bearer:string = ApiHelper.bearer;

    constructor(private loadingSpinnerService:TerraLoadingSpinnerService,
                private baseHttp:Http)
    {
        super(loadingSpinnerService, baseHttp, 'http://master.login.plentymarkets.com/rest/authorized_user');
    }

    public getUserData():Observable<UserData>
    {
        this.setAuthorization();
        this.setHeader();
        return this.mapRequest(
            this.baseHttp.get(this.url, {
                headers: this.headers,
                body:    ''
            })
        );
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
