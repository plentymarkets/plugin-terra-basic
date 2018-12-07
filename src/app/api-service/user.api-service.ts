import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    TerraBaseService,
    TerraLoadingSpinnerService,
    TerraPagerInterface
} from '@plentymarkets/terra-components';
import { tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { of } from 'rxjs/observable/of';
import { UserInterface } from './user.interface';
import { ApiHelper } from '../helper/api.helper';

/**
 * @author mscharf
 */
@Injectable()
export class UsersService extends TerraBaseService
{
    private bearer:string = ApiHelper.bearer;

    constructor(loadingSpinner:TerraLoadingSpinnerService, http:Http)
    {
        super(loadingSpinner, http, 'http://master.login.plentymarkets.com/rest/users');
    }

    public getUsers():Observable<TerraPagerInterface<UserInterface>>
    {
        this.setAuthorization();
        this.setHeader();

        let url:string;

        // set itemsPerPage to a high value to ensure that notes show correctly.
        url = this.url + '?itemsPerPage=1000&page=1';

        if(!isNullOrUndefined(this.dataModel[this.url]))
        {
            return of(this.dataModel[this.url]);
        }

        return this.mapRequest(this.http.get(url, {
            headers: this.headers,
            body:    ''
        })).pipe(tap((users:TerraPagerInterface<UserInterface>) =>
            this.dataModel[this.url] = users));
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
